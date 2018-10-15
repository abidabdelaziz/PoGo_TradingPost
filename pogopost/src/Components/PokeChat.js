import React, { Component } from 'react';
import { observer } from "mobx-react"
import { Collection, CollectionItem, Dropdown, Button, Input, NavItem, Row } from "react-materialize"
import axios from "axios"


class PokeChat extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }

    }

    componentWillReceiveProps(props) {
        if (props != undefined) {
            this.setState({ email: props.email })
            this.getChats()
        }

    }

    getChats() {
        axios.get(`/pkmn/getChats/:${this.state.email}`).then((res) => {
            this.setState({ talks: res.data })
            this.setState( {size:res.data.length})
        })
    }

    componentDidMount() {

    }



    render() {


        return (


            <Collection className="pokeChat">
           

                 {console.log(this.state)}
                  {/* {
                      this.state.tradenum.map(function(object, i){
                        //    console.log(this.props.size-i)

                          return <PokeCard 
                          email = {this.state.email}
                          pkmns={this.props.pkmns[this.props.size-i-1]} key={i} />
                       },this)
                      
                      } */}
                 
            </Collection>


        );
    }
}

export default observer(PokeChat);
