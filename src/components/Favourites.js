import React, { useState, useEffect } from 'react'
import MediaCard from './MediaCard'
import axios from 'axios'

export default function Favourites(props) {

    const [planets, setPlanets] = useState([])

    let id = ''
    const { match } = props
    if(match) id = match.params.id

    useEffect(() => {
        async function fetchMyAPI() {
            let planets = await axios.get(`http://localhost:8080/images?id=${id}`)
            planets.data.forEach(p => p['favourite'] = true)
            if(planets.data.length ==1)
                 planets.data[0].hideDescription = false
            setPlanets(planets.data)
        }
        fetchMyAPI()
    }, [])

    return (
        <div>
            {planets.map(p => <MediaCard planet={p}
                isFavourite={true}
                id={props.id}
                favouriteId={props.favouriteId}
            />)}
        </div>
    )
}