import React, { Component } from 'react';
import {observer} from "mobx-react"
import { Collection} from "react-materialize"
import PokeCard from "../Components/PokeCard"


class PokeCollection extends Component {
  

    constructor (props) {
        super(props)
        this.state={
            tradenum:[],
            size: 0
           
        }
      }

      componentWillReceiveProps(props){
       
           this.setState({email: props.email}) 
           this.setState({size:props.size})
           const arr= Array.apply(null,{length:props.size}).map(Number.call,Number)
        // console.log(arr)
        this.setState({tradenum:arr})
      }

    componentDidMount(){
        const arr= Array.apply(null,{length:this.props.size}).map(Number.call,Number)
        // console.log(arr)
        this.setState({tradenum:arr})
//  console.log(this.props.pkmns[0],this.props.size,"oh hi")
    }
   
    

    render() {
       

      return (
                  <Collection className="pokeCollection">
                  
                  {/* {console.log(this.props.pkmns)} */}
                  {
                      this.state.tradenum.map(function(object, i){
                        //    console.log(this.props.size-i)

                          return <PokeCard 
                          email = {this.state.email}
                          pkmns={this.props.pkmns[this.props.size-i-1]} key={i} />
                       },this)
                      
                      }
                
                  </Collection>
      

    );
}
}

export default observer(PokeCollection);
