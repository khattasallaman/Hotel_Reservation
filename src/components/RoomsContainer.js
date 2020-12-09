import React from 'react'
import { RoomConsumer } from '../ContextAPI'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'


export default function RoomsContainer() {
    return(
       <RoomConsumer>
            {(value)=> {
                const {sortedRooms, isLoading, rooms} = value;
                return (
                    <div>
                        <RoomFilter/>
                        <RoomList rooms={sortedRooms}/>
                    </div>
                ) 
            }}
        </RoomConsumer> 
    )
    
   
}
