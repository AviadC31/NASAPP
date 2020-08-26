import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import favouriteIcon from '../icons/Favourite.png'
import unfavouriteIcon from '../icons/notFavourite.png'

export default function Media(props) {

    const [isFavourite, setFavourite] = useState(false)
    const [isClicked, setClick] = useState(false)
    const [isSaved, setSaved] = useState(false)

    const favouritePlanet = () => {
        setSaved(true)
        setFavourite(true)
    }

    const saveToDB = () => {
        setSaved(!isSaved)
        setClick(!isClicked)
    }

    const favouriteId = () => props.favouriteId(props.planet._id)

    useEffect(() => {
        if (!isSaved && isFavourite)
            axios.delete(`http://localhost:8080/image/${props.planet._id}`)
                .then(res => console.log('image id: ' + res + ' has unfavourited successfully'))
                .catch(err => console.log(err))
        else if (isClicked) axios.post("http://localhost:8080/image", props.planet)
    }, [isClicked])

    return (
        <div>
            {props.planet.favourite && !isFavourite ? favouritePlanet() :
                <div className="box">
                    <p> {props.planet.title} </p>
                    <Link to={`/favourite/${props.planet._id}`}>
                        <img src={props.planet.hdurl} 
                            style={{ width: '50vw', borderRadius: '15px' }}
                            onClick={()=>favouriteId()}
                        />
                    </Link>
                    <p></p>
                    {
                        props.isHome ? null :
                        <img src={isSaved ? `${favouriteIcon}` : `${unfavouriteIcon}`}
                            style={{ width: '1em' }} onClick={() => saveToDB()} 
                        />
                    }
                    <p style={{ width: '50vw' }}> {props.planet.hideDescription ? null : props.planet.explanation} </p>
                </div>
            }
        </div>
    )
}
