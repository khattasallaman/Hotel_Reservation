import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import { RoomContext } from '../ContextAPI'
import StyledHero from '../components/StylesHero'

export default class SingleRoom extends Component {
    constructor(props){
        super()
        console.log(props)
        this.state = {
            id:props.match.params.id
        }
    }
    static contextType = RoomContext;
    render() {
        
        console.log("this is the idddddd ", this.state.id)
        const {getRoom} = this.context
        console.log("this is the GEEEEEEETrooooom ", getRoom)
        const room = getRoom(this.state.id);
        console.log("this is the rooooom ", room)
        
        if(!room){
            return ( 
                <div className="error">
                    <h3>No Such Room Could Be Found...</h3>
                    <Link to="/rooms" className="btn btn-primary">Go Back To Our Rooms Page</Link>
                </div>
            )
        }
        const {name, images, description, capacity, size, price, extras, breakfast, pets} = room;
        const [mainImg, ...restOfImgs] = images
        return (
            <>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to ="/rooms" className="btn btn-primary">Back To Rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {restOfImgs.map((img, index)=>  (<img key={index} src={img} alt={name}/>))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p>{description}</p>    
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>max capacity: {capacity > 1 ? `${capacity} People`: `${capacity} Person`}</h6>
                        <h6>{pets? "Pets Allowed" : "No Pets Allowed"}</h6>
                        <h6>{breakfast && "Free Breakfast Included"}</h6>
                    </article>
                </div>
                <section className="room-extras">
                    <h6>extras</h6>
                <ul className="extras">{extras.map((item, index)=> {
                    return <li key={index}>{item}</li>
                })}</ul>
                </section>
            </section>
            </>
        )
    }
}
