import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
export default class Service extends Component {
    state={
        service:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"So perhaps, you've genrt of hack? Are you copying and pasting an actual font?"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"So perhaps, you've generated some fancy text, and you're n actual font?"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:"So dunny cat Are you copying and pasting an actual font?"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"So perhaps, you've genrt of hack? Are you copying and pasting an actual font?"
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.service.map((elm, index)=> {
                        return (
                        <article key={index} className="service">
                            <span>{elm.icon}</span>
                            <h6>{elm.title}</h6>
                            <p>{elm.info}</p>
                        </article>)
                    })}
                </div>
            </section>
        )
    }
}

