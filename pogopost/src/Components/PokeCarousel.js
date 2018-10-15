import React, { Component } from 'react';
import { Row, Button} from "react-materialize"
import PokemonForm from "../Components/PokemonForm"
import {observer} from "mobx-react"
import PokeTrade from "../models/PokeTrade"

import axios from "axios"

class PokeCarousel extends Component {

  constructor () {
    super()
  
    this.state = {
      tradeTick:0,
      entry: PokeTrade.create({
        "pokemon":"",
        "cp": 0,
        "gender" : "",
        "location": "",
        "fastmove": "",
        "chargemove": "",
        "trainername":"",
        "notes":""
      })
    }
  }


  componentWillReceiveProps(props){

  
  }

    handleForm = (event) =>{
      this.setState({tradeTick:this.state.tradeTick + 1})
      
      let tradeObj={ 
      "pokemon":this.state.entry.pokemon,
      "cp": this.state.entry.cp,
      "gender" : this.state.entry.gender,
      "location": this.state.entry.location,
      "fastmove": this.state.entry.fastmove,
      "chargemove": this.state.entry.chargemove,
      "trainername":this.state.entry.trainername,
      "notes":this.state.entry.notes,
      "email":this.props.auth}

      console.log(tradeObj)
      axios.post("/pkmn/post", tradeObj).then(res =>{
        
      })
      
      this.setState({
        entry: PokeTrade.create({
          "pokemon":"",
          "cp": 0,
          "gender" : "",
          "location": "",
          "fastmove": "",
          "chargemove": "",
          "trainername":"",
          "notes":""
        })
      })
    }


    componentDidMount(){
      
       
    }
    render() {
    
      return (
     
           <div className="formDiv">
            <PokemonForm tradeTick={this.state.tradeTick} pkmn ={this.state.entry} />
            <Row s={12}>
            <Button className="submitButton" waves='light' onClick={this.handleForm}>Deposit for Trade!</Button>
            </Row>
            </div>
            
      )

  
}
}

export default observer(PokeCarousel);
