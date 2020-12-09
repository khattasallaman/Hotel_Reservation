import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/Service'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
    return (
        <div>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="deluxe rooms start at $312">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Service/>
            <FeaturedRooms/>
        </div>
    )
}
