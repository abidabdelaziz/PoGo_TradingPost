import React, { Component } from 'react';
import PokeCollection from "../Components/PokeCollection"
import {observer} from "mobx-react"
import { ProgressBar,Row,Col, Button} from "react-materialize"


class PokePost extends Component {
  

    constructor () {
        super()
      
        this.state = {
          rcntTrades : [],
        //   trades:[]
        }
       
      }

       
    handleRefresh=()=>{

        console.log(this.props.trades.trades)
        this.setState({rcntTrades:Object.keys(this.props.trades.trades).length})
        
        
        // for(var i=0;i<l;i++){
            
        //     const newPoke= [this.props.trades.trades[i]]
        //     console.log(newPoke[0].cp)

        //     const joined = this.state.trades.concat(newPoke)
        //     this.setState({trades:joined})
           
        // }
    }


    componentDidMount(){
        
        console.log("update ui from here pokepost",Object.keys(this.props.trades.trades).length)
    }
   
    

    render() {
       
        
        

      return (


          <div>
           {/* {console.log(Object.keys(this.props.trades.trades).length)} */}

          {
              (this.state.rcntTrades.length===0)  ?
                 
              <Row className="pokeRow">

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
           
              <Button className = 'viewButton' waves='light' onClick={()=>this.handleRefresh()}> View Recent Trades </Button>

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
              
                <PokeCollection pkmns={this.props.trades.trades} size={this.state.rcntTrades}/>
      
                }
     
            </div>

    );
}
}

export default observer(PokePost);