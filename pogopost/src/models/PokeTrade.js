import {types, getParent} from "mobx-state-tree"


const PokeTrade = types
.model("PokeTrade",{
    pokemon:types.string,
    cp: types.number,
    gender : types.string,
    location: types.string,
    fastmove: types.string,
    chargemove: types.string,
    trainername:types.string,
    notes: types.string
    })
    .actions(self =>({
        remove(){
            getParent(self,2).remove(self);
        },
        changePokemon(newPkmn){
            self.pokemon = newPkmn;
        },
        changeCP(newCP){
            self.cp=newCP;
        },
        changeGender(newGender){
            self.gender= newGender;
        },
        changeLoc(newLoc){
            self.location=newLoc;
        },
        changeFastM(newFastM){
            self.fastmove=newFastM;
        },
        changeChargeM(newChargeM){
            self.chargemove=newChargeM;
        },
        changeName(newName){
            self.trainername=newName;
        },
        changeNotes(newNotes){
            self.notes=newNotes;
        }


    }))

export default PokeTrade