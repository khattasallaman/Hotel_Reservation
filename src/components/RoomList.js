import React from 'react'
import Room from './Room'

export default function RoomList({rooms}) {
    if(rooms.length === 0){
        return(
            <div className="empty-search">
                <h3>unfortunately there is no room that match your selection</h3>
            </div>
            )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map((room)=> (<Room key={room.id} room={room} />))}
            </div>
        </section>   
    )
}
