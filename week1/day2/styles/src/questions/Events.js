import { useState } from "react"

const Events = () => {
  const [inputValue, setInputValue] = useState("")

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1>Events</h1>
      {/* <input type='text' onChange={handleChange} /> */}
      <input type='text' onChange={handleChange} />
    </div>
  )
}

export default Events
