import {types} from "mobx-state-tree";
import TradeList from "./TradeList"

const AppState = types
.model('AppState',{
    toplevel: types.string,
    tradeList: types.optional(TradeList, {trades:[]})

});

export default AppState;