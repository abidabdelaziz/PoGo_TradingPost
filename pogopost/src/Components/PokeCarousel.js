import React, { Component } from 'react';
import { Carousel, Row, Button} from "react-materialize"
import PokemonForm from "../Components/PokemonForm"
import {observer} from "mobx-react"
import PokeTrade from "../models/PokeTrade"

import axios from "axios"

class PokeCarousel extends Component {

  constructor () {
    super()
  
    this.state = {
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

    handleForm = (event) =>{
      // console.log(this.state.entry)
      // this.props.tradeList.add(this.state.entry);
      // console.log("after form", this.props.tradeList)
      axios.post("/pkmn/post", this.state.entry).then(res =>{
        // console.log("post test",res)
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
      // console.log("are these props?",this.props.tradeList.trades);
    }
    render() {
    // console.log(this.props)
      return (
        <Carousel options={{ fullWidth: true, indicators: true }}>
        
          <div className='panelOne'>
           
            <PokemonForm pkmn ={this.state.entry}/>
            <Row s={12}>
              <Button waves='light' onClick={this.handleForm}>Submit</Button>
            </Row>

          </div>
          <div className='panelTwo'>
              
            
           
          </div>
        <div className='panelThree'>
          <h2>Third Panel</h2>
          <p className='white-text'>This is your third panel</p>
        </div>
        <div className='panelFour'>
          <h2>Fourth Panel</h2>
          <p className='white-text'>This is your fourth panel</p>
        </div>
      </Carousel>
          
    );
}
}

export default observer(PokeCarousel);
