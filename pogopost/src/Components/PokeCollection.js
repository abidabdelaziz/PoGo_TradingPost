import React, { Component } from 'react';
import {observer} from "mobx-react"
import { Collection} from "react-materialize"
import PokeCard from "../Components/PokeCard"


class PokeCollection extends Component {
  

    constructor () {
        super()
        this.state={
            tradenum:[]
           
        }
      }

       
    handleRefresh=()=>{
    }


    componentDidMount(){
        const arr= Array.apply(null,{length:this.props.size}).map(Number.call,Number)
        // console.log(arr)
        this.setState({tradenum:arr})
 console.log(this.props.pkmns[0],this.props.size,"oh hi")
    }
   
    

    render() {
       

      return (
                  <Collection>
                  {/* {console.log(this.props.pkmns)} */}
                  {
                      this.state.tradenum.map(function(object, i){
                          console.log(this.props.pkmns[i])

                          return <PokeCard pkmns={this.props.pkmns[i]} key={i} />
                       },this)
                      
                      }
                
                  </Collection>
      

    );
}
}

export default observer(PokeCollection);
