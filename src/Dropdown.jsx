import { useState } from "react"

function Dropdown(){

    const [city, setCity] = useState('rajshahi')

    return(
        <>
            <h4>Select City</h4>
            <select defaultValue={city} onChange={(event)=>setCity(event.target.value)}>
                <option value="dhaka">Dhaka</option>
                <option value="khulna">Khulna</option>
                <option value="rajshahi">Rajshahi</option>
            </select>
            <h4>Selected city: {city}</h4>
        </>
    )
}

export default Dropdown