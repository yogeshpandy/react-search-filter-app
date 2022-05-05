import { Component } from 'react'
import './Search.css'

class Search extends Component {

    constructor() {
        super()
        this.state={
            input:""
        }
    }

    searchChange=(event)=>{
        this.setState({input:event.target.value.toLocaleLowerCase()})
    }
    

    render() {
       
        return (
            <input
                className={`search-box ${this.props.className}`} 
                type='search' 
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}

export default Search;