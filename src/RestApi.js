import React, { Component } from 'react'


export default class ReactApi extends Component{
    constructor( props ) {
        super(props)
        this.state = {
            error: null,
            isLoader: false,
            items:[]   
        }
    }
    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
            .then(res => res.json())
            .then(data => {
                console.log('data', data)
                this.setState({
                    isLoader: true,
                    items: data.drinks
                });
            },
                error => {
                    this.setState({
                        isLoader: true,
                        error
                    });
                }
            )
    }
    render() {
        const {
            error, isLoader, items } = this.state
        if (error) {
            return <p>Error{error.message}</p>
        } else if 
            (!isLoader){
            return <p>Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.strDrink}
                            <img  width= '20' height= '20' src={item.strDrinkThumb} alt="apple"/>
                        </li>
                    ))}
                </ul>
            )
            }
            }
        }
    
    
