import React from 'react'
import Media from './Media'

export default function MediaCard (props) {

    return (
            <div>
                {
                    <Media planet={props.planet}
                        isHome={props.isHome? true : false}
                        favouriteId={props.favouriteId} 
                        id={props.id} />
                }
            </div>
    )
}


