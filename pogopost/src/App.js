import React, { Component } from 'react';
import "./App.css"
import Nav from "./Components/Nav"
import PokeCarousel from "./Components/PokeCarousel"
import RefFooter from "./Components/RefFooter"
import PokePost from "./Components/PokePost"
import { Row} from "react-materialize"
import {observer} from "mobx-react"

class App extends Component {
  render() {
    const { tradeList} = this.props;
    return (


     
      <div className="container">

        <Row>
          <Nav />
        </Row>

        <Row>
          <PokePost />
        </Row>

        <Row>
          <PokeCarousel tradeList ={tradeList} />
        </Row>

        <Row>
          <RefFooter />
        </Row>

      </div>

    );
  }
}

export default observer(App);
