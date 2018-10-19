import React, { Component } from 'react';
import { observer } from "mobx-react"
import {CollapsibleItem, Row } from "react-materialize"
import PokeMessage from "./PokeMessage"

class PokeThread extends Component {


    constructor(props) {
        super(props)
        this.state = {
            talk:[],

        }
    }

    componentWillReceiveProps(props) {
        
        this.setState({talk: props.convo.messages})
          
         
        
    }

    componentDidMount() {

    }

    render() {

        return (

            <CollapsibleItem  
                header={`From : ${this.props.convo.fromName} To: ${this.props.convo.toName} 
                Trade : ${this.props.convo.trade}`}
                icon='compare_arrows'>
            <PokeMessage 
                from={this.props.convo.fromName}
                to={this.props.convo.toName}
                messages= {this.state.talk}/>
          </CollapsibleItem> 

        );
    }
}

export default observer(PokeThread);
