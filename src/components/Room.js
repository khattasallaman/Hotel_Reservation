import React from 'react'
import { Link } from 'react-router-dom'
import propsTypes from 'prop-types'
export default function Room({room}) {
    // console.log("this is the roooms   ",room)
    const {name, slug, images, price} = room
    return (
        <article>
            <div className="img-container">
                <img src={images[0]} alt={name}/>
                <div className="price-top">
                     <h6>${price}</h6>
                     <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Featured</Link>
            </div>
                <p className="room-info">{name}</p>
        </article>
    )
}

Room.propsTypes = {
    room:propsTypes.shape({
        name:propsTypes.string.isRequired,
        slug:propsTypes.string.isRequired,
        images:propsTypes.arrayOf(propsTypes.string).isRequired,
        price:propsTypes.number.isRequired,
    })
}
