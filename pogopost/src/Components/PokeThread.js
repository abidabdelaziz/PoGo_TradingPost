import React, { Component } from 'react';
import { observer } from "mobx-react"
import {CollapsibleItem, Row,Button,Col } from "react-materialize"
import PokeMessage from "./PokeMessage"
import axios from "axios"

class PokeThread extends Component {


    constructor(props) {
        super(props)
        this.state = {
            talk:[],
            chat:"",

        }
    }

    componentWillReceiveProps(props) {
        
        this.setState({talk: props.convo.messages})
          
         
        
    }
    handleChat= event =>{
        this.setState({chat:event.target.value})
        
    }
    postChat=event=>{

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        
        if(dd<10) {
            dd = '0'+dd
        } 
        
        if(mm<10) {
            mm = '0'+mm
        } 
        
        today = mm + '/' + dd + '/' + yyyy;



        var d = new Date(),
         h = (d.getHours()<10?'0':'') + d.getHours(),
         m = (d.getMinutes()<10?'0':'') + d.getMinutes();
        d = h + ':' + m +' '+ today
         

        const message={
            trade:this.props.convo.trade,
            fromName:this.props.convo.fromName,
            fromEmail:this.props.convo.fromEmail,
            toName:this.props.convo.toName,
            toEmail:this.props.convo.toEmail,
            messages:[{ [d] :  this.state.chat.trim()}],
            

        }
    
      

       
        axios.post("/pkmn/chat", message).then(res =>{
            console.log("@PokeTrade: axios response ",res)
        
        })
        this.setState({chat:""})
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
                <Row> 

                <Button 
                 onClick={this.postChat}
                 floating large className="threadButton"  waves='light' icon='message' />

             <Col s={12}>
             <textarea value ={this.state.chat} onChange={this.handleChat}> </textarea>
             </Col>
                 
                 </Row>
          </CollapsibleItem> 

        );
    }
}

export default observer(PokeThread);
