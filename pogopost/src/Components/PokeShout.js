import React, { Component } from 'react';
import { observer } from "mobx-react"
import {Row,Col,Icon} from "react-materialize"
class PokeShout extends Component {


    constructor() {
        super()
        this.state = {

            

        }
    }

    componentWillReceiveProps(props) {
        
            console.log("hei mein",props)
         
        
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
            
            <Row> 
                <Col s={2}>
                <Icon tiny>person_outline</Icon>
                {`From: ${this.props.from}`}
                </Col >


               
                <Col s={2}>
                <Icon tiny>person</Icon>
                {`To: ${this.props.to}`}
                </Col>

                <Col s={8}>{`${this.state.date} ${this.state.message}`}</Col>
     
                
             </Row>
        );
    }
}

export default observer(PokeShout);
