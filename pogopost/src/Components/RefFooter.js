import React, { Component } from 'react';
import { Footer } from "react-materialize"


class RefFooter extends Component {
    render() {
      return (
        <Footer copyrights="This is an educational work intended to showcase the MERN Stack, I do not claim any ownership of Pokemn TM content."
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">Hope you enjoy!</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://www.pokemongo.com/en-us/">Pokemon Go Official Website</a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.reddit.com/r/pokemongo/">PoGo Reddit</a></li>
 
            <li><a className="grey-text text-lighten-3" href="https://pokemongohub.net/!">Pokemon Go HUB</a></li>
            <li><a className="grey-text text-lighten-3" href="https://www.serebii.net/">Serebii</a></li>
          </ul>
        }
        className='footer'
      >
        <h5 className="white-text">Project 1</h5>
        <p className="grey-text text-lighten-4">This project is a reflection of my knowledge of the MERN Stack. The app showcases usage of asynchronous JS calls through an axios-express pairing and CRUD Mongo operations in a Node React framework. Authentication and Authorization is handled using Auth0.</p>
      </Footer>
          
    );
}
}

export default RefFooter;