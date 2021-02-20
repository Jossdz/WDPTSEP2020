import { useState, useEffect, useRef } from "react"
import { Card, Col, Row, Button, Typography, Divider } from "antd"
import { getAllPlaces, createNewPlace } from "../services/places"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css"

const { Title } = Typography

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY

function Home() {
  const [coords, setCoords] = useState(null)
  const [zoom, setZoom] = useState(13)
  const [map, setMap] = useState(null)
  const [places, setPlaces] = useState(null)
  const mapDOMRef = useRef()
  const [newPlace, setNewPlace] = useState(null)

  // Un efecto para obtener las coordenadas del user
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(result => {
        setCoords([result.coords.longitude, result.coords.latitude])
      })
    }
    async function getPlaces() {
      const {
        data: { places }
      } = await getAllPlaces()
      setPlaces(places)
    }
    getPlaces()
  }, [])

  useEffect(() => {
    function initializeMap({ setMap, mapDOMRef }) {
      if (coords) {
        const map = new mapboxgl.Map({
          container: mapDOMRef.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: coords,
          zoom: zoom
        })

        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
        })

        geocoder.on("result", ({ result }) => {
          setNewPlace(result) // name: text, center, place_name
        })

        map.addControl(geocoder)

        map.on("load", () => {
          setMap(map)
        })

        map.on("move", () => {
          setCoords([
            map.getCenter().lng.toFixed(4),
            map.getCenter().lat.toFixed(4)
          ])
          setZoom(map.getZoom().toFixed(2))
        })
      }
    }
    if (!map) initializeMap({ setMap, mapDOMRef })
  }, [coords, map, zoom])

  useEffect(() => {
    if (map) {
      places?.forEach(place => {
        new mapboxgl.Marker().setLngLat(place.location.coordinates).addTo(map)
      })
    }
  }, [map, places])

  async function createPlace() {
    const { center, text, place_name } = newPlace
    const { data } = await createNewPlace({
      name: text,
      description: place_name,
      lng: center[0],
      lat: center[1]
    })
    setPlaces([...places, data])
  }

  return (
    <Row gutter={[24]}>
      <Col span={24}>
        <Title level={1}>Places:</Title>
      </Col>
      <Col
        span={24}
        ref={el => (mapDOMRef.current = el)}
        className='mapContainer'
        style={{
          height: "500px"
        }}
      ></Col>
      <Button type='primary' size='large' block onClick={createPlace}>
        Create Place
      </Button>
      {places?.map(place => (
        <Col span={24} key={place._id}>
          <Card title={place.name} extra={<a>❌</a>}>
            {place.description}
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Home
