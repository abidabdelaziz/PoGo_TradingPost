import React, { Component } from 'react';
import { observer } from "mobx-react"
import { Collapsible} from "react-materialize"
import axios from "axios"
import PokeThread from './PokeThread'

class PokeChat extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }

    }

    getChats() {
        axios.get(`/pkmn/getChats/:${this.props.email}`).then((res) => {
            this.setState({ talks: res.data })
            this.setState( {size:res.data.length})
         
        })
    }


    componentWillMount() {
      
        this.getChats()
        //  this.getChats()

        // const arr= Array.apply(null,{length:this.state.size}).map(Number.call,Number)

        // this.setState({tradenum:arr})
    }
    componentDidMount(){


    }



    render() {


        return (

                <Collapsible>


                    {(this.state.talks ===undefined )? <div>blarg</div>
                   : 
                   
                     this.state.talks.map(function(object, i){

                          return <PokeThread convo={object}/>

                        
                      },this)}

                </Collapsible>


        );
    }
}

export default observer(PokeChat);
