mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zc2R6IiwiYSI6ImNrMGR4cWk2djBhbWszY3F2b3N4bDBqZTUifQ.ByHk_m_uZOjYaruW6T8Wig"

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 13
})

const geoCoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl
})

const control = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})

geoCoder.on("result", e => {
  console.log(e)
})

control.on("route", e => {
  console.log(e, "origin:", control.getOrigin())
})

map.addControl(geoCoder)
map.addControl(new mapboxgl.NavigationControl())
map.addControl(control, "top-left")

// Marker 👇
// new mapboxgl.Marker().setLngLat([-99.1622182, 19.4211955]).addTo(map)

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const center = [position.coords.longitude, position.coords.latitude]

    map.setCenter(center)

    new mapboxgl.Marker().setLngLat(center).addTo(map)
  })
}
