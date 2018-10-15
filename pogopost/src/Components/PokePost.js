import React, { Component } from 'react';
import PokeCollection from "../Components/PokeCollection"
import {observer} from "mobx-react"
import { ProgressBar,Row,Col, Button, Tabs,Tab} from "react-materialize"


class PokePost extends Component {
  

    constructor () {
        super()
      
        this.state = {
          rcntTrades : [],
          
        //   trades:[]
        }
       
      }

    componentWillReceiveProps(props){
      // console.log(props)
      this.setState({rcntTrades:props.trades})
      this.setState({email: props.auth})

      ;
    }

       
    handleRefresh=()=>{

        
        this.setState({rcntTrades:Object.keys(this.props.trades.trades).length})
       

    }


    componentDidMount(){
        
  //  console.log("search away",this.state)
   
    }

    render() {
       
        
        

      return (


          <div>

          {   (this.state.rcntTrades.length===0)  ?
                 
              <Row className="pokeRow">
                  {/* <img className="pkmntcImage" src='../pkmntc.jpg'></img> */}
              <Col s={12}>
              <ProgressBar />
              </Col>
              <Row></Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
              <Row></Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
              <Row></Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
           
  
              <Row></Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
              <Row></Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
              <Row></Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
              <Row></Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
              <Row></Row>
              <Col s={12}>
                <ProgressBar />
              </Col>
            </Row>
              :
              
                <PokeCollection pkmns={this.state.rcntTrades} size={this.state.rcntTrades.length}
                email={this.state.email}
                />
          }
           
            </div>

    );
}
}

export default observer(PokePost);