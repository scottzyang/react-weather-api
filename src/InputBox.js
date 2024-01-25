function InputBox({zip, setZip}) {
  return(
    <div>
    <input
      placeholder="Enter Zip Code"
      value={zip}
      onChange={e => setZip(e.target.value)}
    />
    <button type="submit">Submit</button>
  </div>
  )
}

export default InputBox;
