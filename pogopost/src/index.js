import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import TradeList from "./models/TradeList"




const tradeList = TradeList.create( 
    {trades:
       []
    }


);


ReactDOM.render(<App className="app" tradeList ={tradeList}/>, document.getElementById('root'));
registerServiceWorker();
