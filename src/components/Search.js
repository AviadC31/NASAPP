import React, { useState, useEffect } from 'react'
import '../App.css';
import SearchBar from './SearchBar'
import axios from 'axios'

export default function Search(props) {

    const [planetName, setPlanetName] = useState('')
    const [planets, setPlanets] = useState([])

    const getInput = name => setPlanetName(name)

    useEffect(() => {
        if (planetName === '') return
        async function fetchMyAPI() {
            let data = await axios.get(`https://images-api.nasa.gov/search?q=${planetName}&media_type=image`)
            setPlanets(data.data.collection.items)
        }
        fetchMyAPI()
    }, [planetName])

    return (
        <div>    
            <SearchBar planets={planets} getInput={getInput} favouriteId={props.favouriteId} />
        </div>
    )
}