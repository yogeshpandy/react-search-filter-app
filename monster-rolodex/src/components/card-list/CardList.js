import { Component } from 'react'
import Card from './card/Card';
import './CardList.css'

class CardList extends Component {

    constructor(props) {
        super(props);
        this.state= {

        }
    }

    render() {

        const { monsters } = this.props;
        return (
            <div className='card-list'>
            {
                monsters.map((monster)=>{
                    // const { name, id, email } = monster
                    return  <Card monster={monster} />
                })
            }
            </div>
        );
    }
}

export default CardList;