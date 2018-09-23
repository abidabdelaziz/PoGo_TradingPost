import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import TradeList from "./models/TradeList"

const tradeList = TradeList.create( 
    {trades:
       [{"pokemon":"Growlithe",
        "cp": 900,
        "gender" : "male",
        "location": "Brussels",
        "fastmove": "Flame Wheel",
        "chargemove": "Fire Blast",
        "trainername":"Gary",
        "notes": "High Iv"
        },
        {"pokemon":"Abra",
        "cp": 400,
        "gender" : "female",
        "location": "Paris",
        "fastmove": "Teleport",
        "chargemove": "Disable",
        "trainername":"Ashe",
        "notes": "Perfect IV, old"
        }]
    }


);


ReactDOM.render(<App tradeList ={tradeList}/>, document.getElementById('root'));
registerServiceWorker();
