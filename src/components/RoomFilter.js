import React, { useContext } from 'react'
import { RoomContext } from '../ContextAPI'
import Title from './Title';

export default function RoomFilter() {
    const context = useContext(RoomContext)
    const {handleChange, type, capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets, rooms} = context;
    let uniqueSelects = (value) => {
        return [... new Set(rooms.map((room) => room[value]))]
    }
    let types = ['all', ...uniqueSelects("type")];
    let guests = uniqueSelects("capacity");
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select type="type" value={type} name="type" className="form-control" onChange={handleChange}>
                            {types.map((type, index)=> (
                                <option className="" key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                {/* end select type */}
                {/* select capacity */}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select type="capacity" value={capacity} name="capacity" className="form-control" onChange={handleChange}>
                            {guests.map((guest, index)=> (
                                <option className="" key={index} value={guest}>{guest}</option>
                            ))}
                        </select>
                    </div>
                {/* end select capacity */}
                {/* select price */}
                <div className="form-group">
                            <label htmlFor="price">room price ${price}</label>
                        <input type="range" max={maxPrice} min={minPrice} value={price} onChange={handleChange} id="price" name="price" className="form-control"/>
                    </div>
                {/* end select price */}
                {/* start select size  */}
                <div className="form-group">
                        <label htmlFor="size">room size</label>
                        <div className="size-input">
                            <input type="number" value={minSize} onChange={handleChange} id="size" name="minSize" className="size-input"/>

                            <input type="number" value={maxSize} onChange={handleChange} id="size" name="maxSize" className="size-input"/>
                        </div>     
                    </div>
                {/* end select size  */}
                {/* start extra select */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" id="breakfast" name="breakfast" onChange={handleChange} checked={breakfast}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" id="pets" name="pets" onChange={handleChange} checked={pets}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                           
                    </div>
                {/* end extra select */}
            </form>
        </section>
    )
}
