import React, { Component } from 'react';
import { observer } from "mobx-react"
import {Row} from "react-materialize"
class PokeShout extends Component {


    constructor() {
        super()
        this.state = {

            

        }
    }

    componentWillReceiveProps(props) {
        
            console.log(props)
         
        
    }

    componentWillMount(){
        const w= this.props.whisper
        const d = Object.keys(w)
        const m = Object.values(w)
     
        this.setState({date: d,message: m})
      

    }
    componentDidMount() {
      
    }

    render() {

        return (
            
            <div> 
     {`${this.state.date} ${this.state.message}`}
                
                   </div>
        );
    }
}

export default observer(PokeShout);
