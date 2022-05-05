import { Component } from 'react'
import './Card.css'
class Card extends Component {

    render() {
        const { name, id, email } = this.props.monster
                   
        return (
                <div className='card-container' key={id}>
                    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                    <h3>{name}</h3>
                    <h4>{email}</h4>
                </div>
        )
    }
}

export default Card;