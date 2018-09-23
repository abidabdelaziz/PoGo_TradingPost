import {types} from 'mobx-state-tree'
import PokeTrade from "./PokeTrade"

const TradeList= types.model("TradeList", {
    trades: types.optional(types.array(PokeTrade),([]))
}).actions(self => ({
    add(poketrade){
        self.trades.push(poketrade)
    },
    remove(poketrade){
        self.trades.splice(self.trades.indexOf(poketrade),1);
    }
}));


export default TradeList