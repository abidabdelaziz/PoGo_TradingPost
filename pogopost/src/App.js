import React, { Component } from 'react';
import "./App.css"
import Nav from "./Components/Nav"
import PokeCarousel from "./Components/PokeCarousel"
import RefFooter from "./Components/RefFooter"
import PokePost from "./Components/PokePost"
import { Row } from "react-materialize"
import {observer} from "mobx-react"
import axios from "axios"
import PokeTrade from "./models/PokeTrade"



class App extends Component {
  constructor (props) {
    super(props)
  
    this.state = {
       trades:[]
    }
  }
  

  refreshPosts(){
    axios.get("/pkmn/get").then( (res)=>{
        // console.log("get request to mongo")
      
        const PokeNew = res.data
        const l = PokeNew.length
        // console.log(this.props.tradeList.trades,PokeNew, l)
        let i =0;
        while ( i<l) {


        const newPok= PokeTrade.create({
            "pokemon":PokeNew[i].pokemon,
            "cp": PokeNew[i].cp,
            "gender" : PokeNew[i].gender,
            "location": PokeNew[i].location,
            "fastmove": PokeNew[i].fastmove,
            "chargemove": PokeNew[i].chargemove,
            "trainername":PokeNew[i].trainername,
            "notes":PokeNew[i].notes
          })

          var joined = this.state.trades.concat(newPok);
          this.setState({ trades: joined })
          // console.log(newPok)
          this.props.tradeList.add(newPok);
          // console.log(this.props.tradeList)
        i++;
        }
        
        //this.setState({blogs: res.data}); // Changes state after successfull promise 
    })
}

componentWillMount(){
    this.refreshPosts();
}
  

  render() {
 
  
    return (


     
      <div className="container">

        <Row>
          <Nav />
        </Row>

        <Row>
        
          <PokePost  className= "pokePost" tradeList ={this.props} trades={this.state} />
        </Row>

        <Row>
          <PokeCarousel tradeList ={this.props} />
        </Row>

        <Row>
          <RefFooter />
        </Row>

      </div>

    );
  }
}

export default observer(App);
