
function Dropdown({setUnit}) {
  return(
  <select onChange={e => setUnit(e.target.value)}>
    <option value="metric">Celsius</option>
    <option value="imperial">Fahrenheit</option>
    <option value="standard">Kelvin</option>
  </select>
  )
}

export default Dropdown;
