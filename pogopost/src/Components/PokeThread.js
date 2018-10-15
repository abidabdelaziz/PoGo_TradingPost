import React, { Component } from 'react';
import { observer } from "mobx-react"
import { Collection, CollectionItem, Dropdown, Button, Input, NavItem, Row } from "react-materialize"
import axios from "axios"


class PokeChat extends Component {


    constructor(props) {
        super(props)
        this.state = {

        }

    }

    componentWillReceiveProps(props) {
        if (props != undefined) {
            console.log(props)
         
        }

    }

  

    componentDidMount() {

    }



    render() {


        return (


        
                <CollectionItem s={12} className="chatThread">Collapsible Chat Thread
                        <Dropdown trigger={
                        <div>Drop me!</div>
                    }>
                        <Row className="chatMess">
                            yfuyfuyfuoyfuyf
                      </Row>
                        <Row className="chatMess">
                            yrsydjydyd
                      </Row>
                        <Row className="chatMess">
                            idfgidfs
                      </Row>
                    </Dropdown>

                </CollectionItem>

        );
    }
}

export default observer(PokeChat);
