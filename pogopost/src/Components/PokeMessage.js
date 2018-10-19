import React, { Component } from 'react';
import { observer } from "mobx-react"
import PokeShout from "./PokeShout"
import {Row} from "react-materialize"


class PokeMessage extends Component {


    constructor(props) {
        super(props)
        this.state = {
            shouts:[]

        }
    }

    componentWillReceiveProps(props) {
     
        this.setState({shouts:  props.messages})
            

         
        
    }


    componentDidMount() {
     
    }

    render() {

        return (
        
            <span>

                {(this.state.shouts === []) ?

                    <div>blarg</div>
                    :

                    this.state.shouts.map(function (object, i) {

                        return <PokeShout 
                        whisper={this.state.shouts[i]} />


                    }, this)}

            </span>
            )
        
    }
}

export default observer(PokeMessage);
