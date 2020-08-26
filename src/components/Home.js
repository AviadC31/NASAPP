import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import axios from 'axios'
import '../App.css';

export default function Home () {

const [planet, setPlanet] = useState({})

useEffect(() => {
    async function fetchMyAPI() {
        let data = await axios.get('https://api.nasa.gov/planetary/apod?api_key=uubI8wQX1fJD4xDVwzAs0vXzg9IzfFJBLFWejmGv')
        setPlanet(data.data)
    }
    fetchMyAPI()
},[])

return (
            <div>
                {<MediaCard planet={planet} isHome={true} />}
            </div>
    )
}


