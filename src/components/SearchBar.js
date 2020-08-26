import React, { useState, useEffect } from 'react'
import '../App.css';
import MediaCard from './MediaCard'

export default function SearchBar(props) {

    const [input, setInput] = useState('')

    const inputPassing = name => props.getInput(name)

    const handleInput = ({ target }) => setInput(target.value)

    return (
        <div>
            <div id="cover">
                <div className="tb">
                    <div className="td">
                        <input type="text"
                               placeholder="Type Some Planet" 
                               onChange={handleInput} 
                               required
                        />
                    </div>
                    <div className="td" id="s-cover">
                        <button type="submit" onClick={() => inputPassing(input)}>
                            <div id="s-circle"></div>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            {props.planets.map(p => <MediaCard planet={
                {
                    title: p.data[0].title,
                    hdurl: p.links[0].href,
                    explanation: p.data[0].description,
                    hideDescription: true
                }
            } 
            favouriteId={props.favouriteId}
            />)}
        </div>


    )
}