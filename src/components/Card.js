import React from "react"
import Star from '../images/star.png'

export default function Card(props) {
    return (
        <div className="card">
            <img src={require('../images/' +props.coverImg+'.png')} className="card--image" alt={props.description}/>
            <div className="card--stats">
                <img src={Star} className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) •</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price} </span>/ Person</p>
        </div>
    )
}
