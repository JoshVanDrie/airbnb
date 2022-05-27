import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card"
import './style.css'
import Data from './data'
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    const cards = Data.map(props => {
        return <Card
            key={props.id}
            coverImg={props.coverImg}
            rating={props.stats.rating}
            reviewCount={props.stats.reviewCount}
            title={props.title}
            location={props.location}
            price={props.price}
            />
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}
