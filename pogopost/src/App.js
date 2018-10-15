import React, { Component } from 'react';
import "./App.css"
import PokeCarousel from "./Components/PokeCarousel"
import RefFooter from "./Components/RefFooter"
import PokePost from "./Components/PokePost"
import PokeProfile from "./Components/PokeProfile"
import PokeChat from "./Components/PokeChat"
import { Row,Button,Modal,Col,Autocomplete,Input,Navbar, NavItem } from "react-materialize"
import {observer} from "mobx-react"
import axios from "axios"
import {Router, Route} from 'react-router-dom'
//Auth
import Auth from "./auth/Auth.js"
import Callback from "./CallBack/Callback"
import history from './history'
const auth= new Auth();
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
    auth.getProfile()
  }
}



class App extends Component {
  constructor () {
    super() 
    this.state = {
       trades:[],
       size:0,
       "pokemon":"",
       "cp": 0,
       "location": "",
       "trainername":"",
       profileStatus:0,

    }

  }
  
refreshPosts(){
  axios.get("/pkmn/get").then( (res)=>{
      this.setState({ trades: res.data })
      this.setState({size:res.data.length})     
  })
}



searchPokemon(){
  console.log(this.state)

  const stringArr=[this.state.pokemon,
             this.state.cp,
             this.state.location,
             this.state.trainername,
            
            ]

  let getURL = stringArr.join('/')
  
   console.log(getURL)

  this.setState({   
    "pokemon":"",
    "cp": 0,
    "location": "",
    "trainername":"",
 
  });

    axios.get(`/pkmn/search/${getURL}`).then( (res)=>{
      console.log(res.data)   
      this.setState({ trades: res.data })
      this.setState({size:res.data.length}) 
      //  console.log("after search button click",this.state)
    
    })
}



handleAutoChange = (e,value)=>{
  e.preventDefault()
 this.setState({pokemon:value})
}
handleCP =event=>{
 this.setState({cp:event.target.value})
}
handleLoc = event => {
 this.setState({location:event.target.value})
}
handleName= event => {
 this.setState({trainername:event.target.value})
}

changePro(){
  (this.state.profileStatus===0) 
  ? this.setState({profileStatus: 1})
  : this.setState({profileStatus: 0})
}


componentWillMount(){

     this.refreshPosts();
     
     if (auth.isAuthenticated()===true){
     this.setState({ profile: {} });
     const { userProfile, getProfile } = auth;
     if (!userProfile) {
       getProfile((err, profile) => {
         this.setState({ profile });
       });
     } else {
       this.setState({ profile: userProfile });
     }
     
}}



  render() {
   
    return (

       
     
      <div className="container">


      {(auth.isAuthenticated()) ? 
        <div className="postLoad">
        <Row>
        <Router history = {history}>
            <Navbar brand='Pokemon Go Trading Post' right>
               
               
               {(this.state.profileStatus===0)
               ?<NavItem onClick={() => this.changePro()}
               >Your Trades</NavItem>
               : <NavItem onClick={() => this.changePro()}
               >Home</NavItem>}
  
              {
                auth.isAuthenticated() ? 
                <NavItem onClick={() => auth.logout()}> Log Out </NavItem>:
                <NavItem onClick={() => auth.login()}>  Log In </NavItem>
              }
       
              <Route path="/callback" render={(props) => {
                  auth.handleAuthentication(props);
                   return <Callback {...props} /> 
              }}/>


              {/* <Route path="/" render={(props) => <Profile auth={auth} {...props} />} /> */}
            </Navbar>
          </Router>
        </Row>

        <Row>
          <div className="searcharea">
              <Button className="searchButton" onClick={this.searchPokemon.bind(this)}>Search for a Pokemon!</Button>
              
                <Row s={12}>
                  <Col s={3} >
                    <Autocomplete s={12}
                      name="pkmntrade"
                      className="tradeForm"
                      title='Pokemon'
                      value={this.state.pokemon}
                      onChange={this.handleAutoChange}
                      limit={2}
                      data={
                        {
                          'Bulbasaur': '../Pokemon/pokemon_icon_001_00.png',
                          'Bulbasaur Shiny': '../Pokemon/pokemon_icon_001_00_shiny.png',
                          'Ivysaur': '../Pokemon/pokemon_icon_002_00.png',
                          'Ivysaur Shiny': '../Pokemon/pokemon_icon_002_00_shiny.png',
                          'Venasaur': '../Pokemon/pokemon_icon_003_00.png',
                          'Venasaur Shiny': '../Pokemon/pokemon_icon_003_00_shiny.png',
                          'Charmander': '../Pokemon/pokemon_icon_004_00.png',
                          'Charmander Shiny': '../Pokemon/pokemon_icon_004_00_shiny.png',
                          "Charmeleon": '../Pokemon/pokemon_icon_005_00.png',
                          "Charmeleon Shiny": '../Pokemon/pokemon_icon_005_00_shiny.png',
                          "Charizard": '../Pokemon/pokemon_icon_006_00.png',
                          "Charizard Shiny": '../Pokemon/pokemon_icon_006_00_shiny.png',
                          'Squirtle': '../Pokemon/pokemon_icon_007_00.png',
                          'Squirtle Shiny': '../Pokemon/pokemon_icon_007_00_shiny.png',
                          'Wartortle': '../Pokemon/pokemon_icon_008_00.png',
                          'Wartortle Shiny': '../Pokemon/pokemon_icon_008_00_shiny.png',
                          'Blastoise': '../Pokemon/pokemon_icon_009_00.png',
                          'Blastoise Shiny': '../Pokemon/pokemon_icon_009_00_shiny.png',
                          'Caterpie': '../Pokemon/pokemon_icon_010_00.png',
                          'Metapod': '../Pokemon/pokemon_icon_011_00.png',
                          'Butterfree': '../Pokemon/pokemon_icon_012_00.png',
                          'Weedle': '../Pokemon/pokemon_icon_013_00.png',
                          'Kakuna': '../Pokemon/pokemon_icon_014_00.png',
                          'Beedrill': '../Pokemon/pokemon_icon_015_00.png',
                          'Pidgey': '../Pokemon/pokemon_icon_016_00.png',
                          'Pidgeotto': '../Pokemon/pokemon_icon_017_00.png',
                          'Pidgeot': '../Pokemon/pokemon_icon_018_00.png',
                          'Rattata': '../Pokemon/pokemon_icon_019_00.png',
                          'Raticate': '../Pokemon/pokemon_icon_020_00.png',
                          'Spearow': '../Pokemon/pokemon_icon_021_00.png',
                          'Fearow': '../Pokemon/pokemon_icon_022_00.png',
                          'Ekans': '../Pokemon/pokemon_icon_023_00.png',
                          'Arbok': '../Pokemon/pokemon_icon_024_00.png',
                          'Pikachu': '../Pokemon/pokemon_icon_025_00.png',
                          'Raichu': '../Pokemon/pokemon_icon_026_00.png',
                          'Sandshrew': '../Pokemon/pokemon_icon_027_00.png',
                          'Sandslash': '../Pokemon/pokemon_icon_028_00.png',
                          'Nidoran♀': '../Pokemon/pokemon_icon_029_00.png',
                          'Nidorina': '../Pokemon/pokemon_icon_030_00.png',
                          'Nidoqueen': '../Pokemon/pokemon_icon_031_00.png',
                          'Nidoran♂': '../Pokemon/pokemon_icon_032_00.png',
                          'Nidorino': '../Pokemon/pokemon_icon_033_00.png',
                          'Nidoking': '../Pokemon/pokemon_icon_034_00.png',
                          'Clefairy': '../Pokemon/pokemon_icon_035_00.png',
                          'Clefable': '../Pokemon/pokemon_icon_036_00.png',
                          'Vulpix': '../Pokemon/pokemon_icon_037_00.png',
                          'Ninetales': '../Pokemon/pokemon_icon_038_00.png',
                          'Jigglypuff': '../Pokemon/pokemon_icon_039_00.png',
                          'Wigglytuff': '../Pokemon/pokemon_icon_040_00.png',
                          'Zubat': '../Pokemon/pokemon_icon_041_00.png',
                          'Golbat': '../Pokemon/pokemon_icon_042_00.png',
                          'Oddish': '../Pokemon/pokemon_icon_043_00.png',
                          'Gloom': '../Pokemon/pokemon_icon_044_00.png',
                          'Vileplume': '../Pokemon/pokemon_icon_045_00.png',
                          'Paras': '../Pokemon/pokemon_icon_046_00.png',
                          'Parasect': '../Pokemon/pokemon_icon_047_00.png',
                          'Venonat': '../Pokemon/pokemon_icon_048_00.png',
                          'Venomoth': '../Pokemon/pokemon_icon_049_00.png',
                          'Diglett': '../Pokemon/pokemon_icon_050_00.png',
                          'Dugtrio': '../Pokemon/pokemon_icon_051_00.png',
                          'Meowth': '../Pokemon/pokemon_icon_052_00.png',
                          'Persian': '../Pokemon/pokemon_icon_053_00.png',
                          'Psyduck': '../Pokemon/pokemon_icon_054_00.png',
                          'Golduck': '../Pokemon/pokemon_icon_055_00.png',
                          'Mankey': '../Pokemon/pokemon_icon_056_00.png',
                          'Primeape': '../Pokemon/pokemon_icon_057_00.png',
                          'Growlithe': '../Pokemon/pokemon_icon_058_00.png',
                          'Arcanine': '../Pokemon/pokemon_icon_059_00.png',
                          'Poliwag': '../Pokemon/pokemon_icon_060_00.png',
                          'Poliwhirl': '../Pokemon/pokemon_icon_061_00.png',
                          'Poliwrath': '../Pokemon/pokemon_icon_062_00.png',
                          'Abra': '../Pokemon/pokemon_icon_063_00.png',
                          'Kadabra': '../Pokemon/pokemon_icon_064_00.png',
                          'Alakazam': '../Pokemon/pokemon_icon_065_00.png',
                          'Machop': '../Pokemon/pokemon_icon_066_00.png',
                          'Machoke': '../Pokemon/pokemon_icon_067_00.png',
                          'Machamp': '../Pokemon/pokemon_icon_068_00.png',
                          'Bellsprout': '../Pokemon/pokemon_icon_069_00.png',
                          'Weepinbell': '../Pokemon/pokemon_icon_070_00.png',
                          'Victreebel': '../Pokemon/pokemon_icon_071_00.png',
                          'Tentacool': '../Pokemon/pokemon_icon_072_00.png',
                          'Tentacruel': '../Pokemon/pokemon_icon_073_00.png',
                          'Geodude': '../Pokemon/pokemon_icon_074_00.png',
                          'Graveler': '../Pokemon/pokemon_icon_075_00.png',
                          'Golem': '../Pokemon/pokemon_icon_076_00.png',
                          'Ponyta': '../Pokemon/pokemon_icon_077_00.png',
                          'Rapidash': '../Pokemon/pokemon_icon_078_00.png',
                          'Slowpoke': '../Pokemon/pokemon_icon_079_00.png',
                          'Slowbro': '../Pokemon/pokemon_icon_080_00.png',
                          'Magnemite': '../Pokemon/pokemon_icon_081_00.png',
                          'Magneton': '../Pokemon/pokemon_icon_082_00.png',
                          'Farfetchd': '../Pokemon/pokemon_icon_083_00.png',
                          'Doduo': '../Pokemon/pokemon_icon_084_00.png',
                          'Dodrio': '../Pokemon/pokemon_icon_085_00.png',
                          'Seel': '../Pokemon/pokemon_icon_086_00.png',
                          'Dewgong': '../Pokemon/pokemon_icon_087_00.png',
                          'Grimer': '../Pokemon/pokemon_icon_088_00.png',
                          'Muk': '../Pokemon/pokemon_icon_089_00.png',
                          'Shellder': '../Pokemon/pokemon_icon_090_00.png',
                          'Cloyster': '../Pokemon/pokemon_icon_091_00.png',
                          'Gastly': '../Pokemon/pokemon_icon_092_00.png',
                          'Haunter': '../Pokemon/pokemon_icon_093_00.png',
                          'Gengar': '../Pokemon/pokemon_icon_094_00.png',
                          'Onix': '../Pokemon/pokemon_icon_095_00.png',
                          'Drowzee': '../Pokemon/pokemon_icon_096_00.png',
                          'Hypno': '../Pokemon/pokemon_icon_097_00.png',
                          'Krabby': '../Pokemon/pokemon_icon_098_00.png',
                          'Kingler': '../Pokemon/pokemon_icon_099_00.png',
                          'Voltorb': '../Pokemon/pokemon_icon_100_00.png',
                          'Electrode': '../Pokemon/pokemon_icon_101_00.png',
                          'Exeggcute': '../Pokemon/pokemon_icon_102_00.png',
                          'Exeggutor': '../Pokemon/pokemon_icon_103_00.png',
                          'Cubone': '../Pokemon/pokemon_icon_104_00.png',
                          'Marowak': '../Pokemon/pokemon_icon_105_00.png',
                          'Hitmonlee': '../Pokemon/pokemon_icon_106_00.png',
                          'Hitmonchan': '../Pokemon/pokemon_icon_107_00.png',
                          'Lickitung': '../Pokemon/pokemon_icon_108_00.png',
                          'Koffing': '../Pokemon/pokemon_icon_109_00.png',
                          'Weezing': '../Pokemon/pokemon_icon_110_00.png',
                          'Rhyhorn': '../Pokemon/pokemon_icon_111_00.png',
                          'Rhydon': '../Pokemon/pokemon_icon_112_00.png',
                          'Chansey': '../Pokemon/pokemon_icon_113_00.png',
                          'Tangela': '../Pokemon/pokemon_icon_114_00.png',
                          'Kangaskhan': '../Pokemon/pokemon_icon_115_00.png',
                          'Horsea': '../Pokemon/pokemon_icon_116_00.png',
                          'Seadra': '../Pokemon/pokemon_icon_117_00.png',
                          'Goldeen': '../Pokemon/pokemon_icon_118_00.png',
                          'Seaking': '../Pokemon/pokemon_icon_119_00.png',
                          'Staryu': '../Pokemon/pokemon_icon_120_00.png',
                          'Starmie': '../Pokemon/pokemon_icon_121_00.png',
                          'Mr. Mime': '../Pokemon/pokemon_icon_122_00.png',
                          'Scyther': '../Pokemon/pokemon_icon_123_00.png',
                          'Jynx': '../Pokemon/pokemon_icon_124_00.png',
                          'Electabuzz': '../Pokemon/pokemon_icon_125_00.png',
                          'Magmar': '../Pokemon/pokemon_icon_126_00.png',
                          'Pinsir': '../Pokemon/pokemon_icon_127_00.png',
                          'Tauros': '../Pokemon/pokemon_icon_128_00.png',
                          'Magikarp': '../Pokemon/pokemon_icon_129_00.png',
                          'Gyarados': '../Pokemon/pokemon_icon_130_00.png',
                          'Lapras': '../Pokemon/pokemon_icon_131_00.png',
                          'Ditto': '../Pokemon/pokemon_icon_132_00.png',
                          'Eevee': '../Pokemon/pokemon_icon_133_00.png',
                          'Vaporeon': '../Pokemon/pokemon_icon_134_00.png',
                          'Jolteon': '../Pokemon/pokemon_icon_135_00.png',
                          'Flareon': '../Pokemon/pokemon_icon_136_00.png',
                          'Porygon': '../Pokemon/pokemon_icon_137_00.png',
                          'Omanyte': '../Pokemon/pokemon_icon_138_00.png',
                          'Omastar': '../Pokemon/pokemon_icon_139_00.png',
                          'Kabuto': '../Pokemon/pokemon_icon_140_00.png',
                          'Kabutops': '../Pokemon/pokemon_icon_141_00.png',
                          'Aerodactyl': '../Pokemon/pokemon_icon_142_00.png',
                          'Snorlax': '../Pokemon/pokemon_icon_143_00.png',
                          'Articuno': '../Pokemon/pokemon_icon_144_00.png',
                          'Zapdos': '../Pokemon/pokemon_icon_145_00.png',
                          'Moltres': '../Pokemon/pokemon_icon_146_00.png',
                          'Dratini': '../Pokemon/pokemon_icon_147_00.png',
                          'Dragonair': '../Pokemon/pokemon_icon_148_00.png',
                          'Dragonite': '../Pokemon/pokemon_icon_149_00.png',
                          'Mewtwo': '../Pokemon/pokemon_icon_150_00.png',
                          'Mew': '../Pokemon/pokemon_icon_151_00.png',
                          'Chikorita': '../Pokemon/pokemon_icon_152_00.png',
                          'Bayleef': '../Pokemon/pokemon_icon_153_00.png',
                          'Meganium': '../Pokemon/pokemon_icon_154_00.png',
                          'Cyndaquil': '../Pokemon/pokemon_icon_155_00.png',
                          'Quilava': '../Pokemon/pokemon_icon_156_00.png',
                          'Typhlosion': '../Pokemon/pokemon_icon_157_00.png',
                          'Totodile': '../Pokemon/pokemon_icon_158_00.png',
                          'Croconaw': '../Pokemon/pokemon_icon_159_00.png',
                          'Feraligatr': '../Pokemon/pokemon_icon_160_00.png',
                          'Sentret': '../Pokemon/pokemon_icon_161_00.png',
                          'Furret': '../Pokemon/pokemon_icon_162_00.png',
                          'Hoothoot': '../Pokemon/pokemon_icon_163_00.png',
                          'Noctowl': '../Pokemon/pokemon_icon_164_00.png',
                          'Ledyba': '../Pokemon/pokemon_icon_165_00.png',
                          'Ledian': '../Pokemon/pokemon_icon_166_00.png',
                          'Spinarak': '../Pokemon/pokemon_icon_167_00.png',
                          'Ariados': '../Pokemon/pokemon_icon_168_00.png',
                          'Crobat': '../Pokemon/pokemon_icon_169_00.png',
                          'Chinchou': '../Pokemon/pokemon_icon_170_00.png',
                          'Lanturn': '../Pokemon/pokemon_icon_171_00.png',
                          'Pichu': '../Pokemon/pokemon_icon_172_00.png',
                          'Cleffa': '../Pokemon/pokemon_icon_173_00.png',
                          'Igglybuff': '../Pokemon/pokemon_icon_174_00.png',
                          'Togepi': '../Pokemon/pokemon_icon_175_00.png',
                          'Togetic': '../Pokemon/pokemon_icon_176_00.png',
                          'Natu': '../Pokemon/pokemon_icon_177_00.png',
                          'Xatu': '../Pokemon/pokemon_icon_178_00.png',
                          'Mareep': '../Pokemon/pokemon_icon_179_00.png',
                          'Flaaffy': '../Pokemon/pokemon_icon_180_00.png',
                          'Ampharos': '../Pokemon/pokemon_icon_181_00.png',
                          'Bellossom': '../Pokemon/pokemon_icon_182_00.png',
                          'Marill': '../Pokemon/pokemon_icon_183_00.png',
                          'Azumarill': '../Pokemon/pokemon_icon_184_00.png',
                          'Sudowoodo': '../Pokemon/pokemon_icon_185_00.png',
                          'Politoed': '../Pokemon/pokemon_icon_186_00.png',
                          'Hoppip': '../Pokemon/pokemon_icon_187_00.png',
                          'Skiploom': '../Pokemon/pokemon_icon_188_00.png',
                          'Jumpluff': '../Pokemon/pokemon_icon_189_00.png',
                          'Aipom': '../Pokemon/pokemon_icon_190_00.png',
                          'Sunkern': '../Pokemon/pokemon_icon_191_00.png',
                          'Sunflora': '../Pokemon/pokemon_icon_192_00.png',
                          'Yanma': '../Pokemon/pokemon_icon_193_00.png',
                          'Wooper': '../Pokemon/pokemon_icon_194_00.png',
                          'Quagsire': '../Pokemon/pokemon_icon_195_00.png',
                          'Espeon': '../Pokemon/pokemon_icon_196_00.png',
                          'Umbreon': '../Pokemon/pokemon_icon_197_00.png',
                          'Murkrow': '../Pokemon/pokemon_icon_198_00.png',
                          'Slowking': '../Pokemon/pokemon_icon_199_00.png',
                          'Misdreavus': '../Pokemon/pokemon_icon_200_00.png',
                          'Unown': '../Pokemon/pokemon_icon_201_00.png',
                          'Wobbuffet': '../Pokemon/pokemon_icon_202_00.png',
                          'Girafarig': '../Pokemon/pokemon_icon_203_00.png',
                          'Pineco': '../Pokemon/pokemon_icon_204_00.png',
                          'Forretress': '../Pokemon/pokemon_icon_205_00.png',
                          'Dunsparce': '../Pokemon/pokemon_icon_206_00.png',
                          'Gligar': '../Pokemon/pokemon_icon_207_00.png',
                          'Steelix': '../Pokemon/pokemon_icon_208_00.png',
                          'Snubbull': '../Pokemon/pokemon_icon_209_00.png',
                          'Granbull': '../Pokemon/pokemon_icon_210_00.png',
                          'Qwilfish': '../Pokemon/pokemon_icon_211_00.png',
                          'Scizor': '../Pokemon/pokemon_icon_212_00.png',
                          'Shuckle': '../Pokemon/pokemon_icon_213_00.png',
                          'Heracross': '../Pokemon/pokemon_icon_214_00.png',
                          'Sneasel': '../Pokemon/pokemon_icon_215_00.png',
                          'Teddiursa': '../Pokemon/pokemon_icon_216_00.png',
                          'Ursaring': '../Pokemon/pokemon_icon_217_00.png',
                          'Slugma': '../Pokemon/pokemon_icon_218_00.png',
                          'Magcargo': '../Pokemon/pokemon_icon_219_00.png',
                          'Swinub': '../Pokemon/pokemon_icon_220_00.png',
                          'Piloswine': '../Pokemon/pokemon_icon_221_00.png',
                          'Corsola': '../Pokemon/pokemon_icon_222_00.png',
                          'Remoraid': '../Pokemon/pokemon_icon_223_00.png',
                          'Octillery': '../Pokemon/pokemon_icon_224_00.png',
                          'Delibird': '../Pokemon/pokemon_icon_225_00.png',
                          'Mantine': '../Pokemon/pokemon_icon_226_00.png',
                          'Skarmory': '../Pokemon/pokemon_icon_227_00.png',
                          'Houndour': '../Pokemon/pokemon_icon_228_00.png',
                          'Houndoom': '../Pokemon/pokemon_icon_229_00.png',
                          'Kingdra': '../Pokemon/pokemon_icon_230_00.png',
                          'Phanpy': '../Pokemon/pokemon_icon_231_00.png',
                          'Donphan': '../Pokemon/pokemon_icon_232_00.png',
                          'Porygon2': '../Pokemon/pokemon_icon_233_00.png',
                          'Stantler': '../Pokemon/pokemon_icon_234_00.png',
                          'Smeargle': '../Pokemon/pokemon_icon_235_00.png',
                          'Tyrogue': '../Pokemon/pokemon_icon_236_00.png',
                          'Hitmontop': '../Pokemon/pokemon_icon_237_00.png',
                          'Smoochum': '../Pokemon/pokemon_icon_238_00.png',
                          'Elekid': '../Pokemon/pokemon_icon_239_00.png',
                          'Magby': '../Pokemon/pokemon_icon_240_00.png',
                          'Miltank': '../Pokemon/pokemon_icon_241_00.png',
                          'Blissey': '../Pokemon/pokemon_icon_242_00.png',
                          'Raikou': '../Pokemon/pokemon_icon_243_00.png',
                          'Entei': '../Pokemon/pokemon_icon_244_00.png',
                          'Suicune': '../Pokemon/pokemon_icon_245_00.png',
                          'Larvitar': '../Pokemon/pokemon_icon_246_00.png',
                          'Pupitar': '../Pokemon/pokemon_icon_247_00.png',
                          'Tyranitar': '../Pokemon/pokemon_icon_248_00.png',
                          'Lugia': '../Pokemon/pokemon_icon_249_00.png',
                          'Ho-Oh': '../Pokemon/pokemon_icon_250_00.png',
                          'Celebi': '../Pokemon/pokemon_icon_251_00.png',
                          'Treecko': '../Pokemon/pokemon_icon_252_00.png',
                          'Grovyle': '../Pokemon/pokemon_icon_253_00.png',
                          'Sceptile': '../Pokemon/pokemon_icon_254_00.png',
                          'Torchic': '../Pokemon/pokemon_icon_255_00.png',
                          'Combusken': '../Pokemon/pokemon_icon_256_00.png',
                          'Blaziken': '../Pokemon/pokemon_icon_257_00.png',
                          'Mudkip': '../Pokemon/pokemon_icon_258_00.png',
                          'Marshtomp': '../Pokemon/pokemon_icon_259_00.png',
                          'Swampert': '../Pokemon/pokemon_icon_260_00.png',
                          'Poochyena': '../Pokemon/pokemon_icon_261_00.png',
                          'Mightyena': '../Pokemon/pokemon_icon_262_00.png',
                          'Zigzagoon': '../Pokemon/pokemon_icon_263_00.png',
                          'Linoone': '../Pokemon/pokemon_icon_264_00.png',
                          'Wurmple': '../Pokemon/pokemon_icon_265_00.png',
                          'Silcoon': '../Pokemon/pokemon_icon_266_00.png',
                          'Beautifly': '../Pokemon/pokemon_icon_267_00.png',
                          'Cascoon': '../Pokemon/pokemon_icon_268_00.png',
                          'Dustox': '../Pokemon/pokemon_icon_269_00.png',
                          'Lotad': '../Pokemon/pokemon_icon_270_00.png',
                          'Lombre': '../Pokemon/pokemon_icon_271_00.png',
                          'Ludicolo': '../Pokemon/pokemon_icon_272_00.png',
                          'Seedot': '../Pokemon/pokemon_icon_273_00.png',
                          'Nuzleaf': '../Pokemon/pokemon_icon_274_00.png',
                          'Shiftry': '../Pokemon/pokemon_icon_275_00.png',
                          'Taillow': '../Pokemon/pokemon_icon_276_00.png',
                          'Swellow': '../Pokemon/pokemon_icon_277_00.png',
                          'Wingull': '../Pokemon/pokemon_icon_278_00.png',
                          'Pelipper': '../Pokemon/pokemon_icon_279_00.png',
                          'Ralts': '../Pokemon/pokemon_icon_280_00.png',
                          'Kirlia': '../Pokemon/pokemon_icon_281_00.png',
                          'Gardevoir': '../Pokemon/pokemon_icon_282_00.png',
                          'Surskit': '../Pokemon/pokemon_icon_283_00.png',
                          'Masquerain': '../Pokemon/pokemon_icon_284_00.png',
                          'Shroomish': '../Pokemon/pokemon_icon_285_00.png',
                          'Breloom': '../Pokemon/pokemon_icon_286_00.png',
                          'Slakoth': '../Pokemon/pokemon_icon_287_00.png',
                          'Vigoroth': '../Pokemon/pokemon_icon_288_00.png',
                          'Slaking': '../Pokemon/pokemon_icon_289_00.png',
                          'Nincada': '../Pokemon/pokemon_icon_290_00.png',
                          'Ninjask': '../Pokemon/pokemon_icon_291_00.png',
                          'Shedinja': '../Pokemon/pokemon_icon_292_00.png',
                          'Whismur': '../Pokemon/pokemon_icon_293_00.png',
                          'Loudred': '../Pokemon/pokemon_icon_294_00.png',
                          'Exploud': '../Pokemon/pokemon_icon_295_00.png',
                          'Makuhita': '../Pokemon/pokemon_icon_296_00.png',
                          'Hariyama': '../Pokemon/pokemon_icon_297_00.png',
                          'Azurill': '../Pokemon/pokemon_icon_298_00.png',
                          'Nosepass': '../Pokemon/pokemon_icon_299_00.png',
                          'Skitty': '../Pokemon/pokemon_icon_300_00.png',
                          'Delcatty': '../Pokemon/pokemon_icon_301_00.png',
                          'Sableye': '../Pokemon/pokemon_icon_302_00.png',
                          'Mawile': '../Pokemon/pokemon_icon_303_00.png',
                          'Aron': '../Pokemon/pokemon_icon_304_00.png',
                          'Lairon': '../Pokemon/pokemon_icon_305_00.png',
                          'Aggron': '../Pokemon/pokemon_icon_306_00.png',
                          'Meditite': '../Pokemon/pokemon_icon_307_00.png',
                          'Medicham': '../Pokemon/pokemon_icon_308_00.png',
                          'Electrike': '../Pokemon/pokemon_icon_309_00.png',
                          'Manectric': '../Pokemon/pokemon_icon_310_00.png',
                          'Plusle': '../Pokemon/pokemon_icon_311_00.png',
                          'Minun': '../Pokemon/pokemon_icon_312_00.png',
                          'Volbeat': '../Pokemon/pokemon_icon_313_00.png',
                          'Illumise': '../Pokemon/pokemon_icon_314_00.png',
                          'Roselia': '../Pokemon/pokemon_icon_315_00.png',
                          'Gulpin': '../Pokemon/pokemon_icon_316_00.png',
                          'Swalot': '../Pokemon/pokemon_icon_317_00.png',
                          'Carvanha': '../Pokemon/pokemon_icon_318_00.png',
                          'Sharpedo': '../Pokemon/pokemon_icon_319_00.png',
                          'Wailmer': '../Pokemon/pokemon_icon_320_00.png',
                          'Wailord': '../Pokemon/pokemon_icon_321_00.png',
                          'Numel': '../Pokemon/pokemon_icon_322_00.png',
                          'Camerupt': '../Pokemon/pokemon_icon_323_00.png',
                          'Torkoal': '../Pokemon/pokemon_icon_324_00.png',
                          'Spoink': '../Pokemon/pokemon_icon_325_00.png',
                          'Grumpig': '../Pokemon/pokemon_icon_326_00.png',
                          'Spinda': '../Pokemon/pokemon_icon_327_00.png',
                          'Trapinch': '../Pokemon/pokemon_icon_328_00.png',
                          'Vibrava': '../Pokemon/pokemon_icon_329_00.png',
                          'Flygon': '../Pokemon/pokemon_icon_330_00.png',
                          'Cacnea': '../Pokemon/pokemon_icon_331_00.png',
                          'Cacturne': '../Pokemon/pokemon_icon_332_00.png',
                          'Swablu': '../Pokemon/pokemon_icon_333_00.png',
                          'Altaria': '../Pokemon/pokemon_icon_334_00.png',
                          'Zangoose': '../Pokemon/pokemon_icon_335_00.png',
                          'Seviper': '../Pokemon/pokemon_icon_336_00.png',
                          'Lunatone': '../Pokemon/pokemon_icon_337_00.png',
                          'Solrock': '../Pokemon/pokemon_icon_338_00.png',
                          'Barboach': '../Pokemon/pokemon_icon_339_00.png',
                          'Whiscash': '../Pokemon/pokemon_icon_340_00.png',
                          'Corphish': '../Pokemon/pokemon_icon_341_00.png',
                          'Crawdaunt': '../Pokemon/pokemon_icon_342_00.png',
                          'Baltoy': '../Pokemon/pokemon_icon_343_00.png',
                          'Claydol': '../Pokemon/pokemon_icon_344_00.png',
                          'Lileep': '../Pokemon/pokemon_icon_345_00.png',
                          'Cradily': '../Pokemon/pokemon_icon_346_00.png',
                          'Anorith': '../Pokemon/pokemon_icon_347_00.png',
                          'Armaldo': '../Pokemon/pokemon_icon_348_00.png',
                          'Feebas': '../Pokemon/pokemon_icon_349_00.png',
                          'Milotic': '../Pokemon/pokemon_icon_350_00.png',
                          'Castform': '../Pokemon/pokemon_icon_351_00.png',
                          'Kecleon': '../Pokemon/pokemon_icon_352_00.png',
                          'Shuppet': '../Pokemon/pokemon_icon_353_00.png',
                          'Banette': '../Pokemon/pokemon_icon_354_00.png',
                          'Duskull': '../Pokemon/pokemon_icon_355_00.png',
                          'Dusclops': '../Pokemon/pokemon_icon_356_00.png',
                          'Tropius': '../Pokemon/pokemon_icon_357_00.png',
                          'Chimecho': '../Pokemon/pokemon_icon_358_00.png',
                          'Absol': '../Pokemon/pokemon_icon_359_00.png',
                          'Wynaut': '../Pokemon/pokemon_icon_360_00.png',
                          'Snorunt': '../Pokemon/pokemon_icon_361_00.png',
                          'Glalie': '../Pokemon/pokemon_icon_362_00.png',
                          'Spheal': '../Pokemon/pokemon_icon_363_00.png',
                          'Sealeo': '../Pokemon/pokemon_icon_364_00.png',
                          'Walrein': '../Pokemon/pokemon_icon_365_00.png',
                          'Clamperl': '../Pokemon/pokemon_icon_366_00.png',
                          'Huntail': '../Pokemon/pokemon_icon_367_00.png',
                          'Gorebyss': '../Pokemon/pokemon_icon_368_00.png',
                          'Relicanth': '../Pokemon/pokemon_icon_369_00.png',
                          'Luvdisc': '../Pokemon/pokemon_icon_370_00.png',
                          'Bagon': '../Pokemon/pokemon_icon_371_00.png',
                          'Shelgon': '../Pokemon/pokemon_icon_372_00.png',
                          'Salamence': '../Pokemon/pokemon_icon_373_00.png',
                          'Beldum': '../Pokemon/pokemon_icon_374_00.png',
                          'Metang': '../Pokemon/pokemon_icon_375_00.png',
                          'Metagross': '../Pokemon/pokemon_icon_376_00.png',
                          'Regirock': '../Pokemon/pokemon_icon_377_00.png',
                          'Regice': '../Pokemon/pokemon_icon_378_00.png',
                          'Registeel': '../Pokemon/pokemon_icon_379_00.png',
                          'Latias': '../Pokemon/pokemon_icon_380_00.png',
                          'Latios': '../Pokemon/pokemon_icon_381_00.png',
                          'Kyogre': '../Pokemon/pokemon_icon_382_00.png',
                          'Groudon': '../Pokemon/pokemon_icon_383_00.png',
                          'Rayquaza': '../Pokemon/pokemon_icon_384_00.png',
                          'Jirachi': '../Pokemon/pokemon_icon_385_00.png',
                          'Deoxys': '../Pokemon/pokemon_icon_386_00.png',
                        }
                      } />
                  </Col>

                  <Col s={3} >
                    <Input s={12}
                      value={this.state.cp}
                      label=" Min C.P."
                      onChange={this.handleCP}
                    />
                  </Col>
                  <Col s={3} >
                    <Input s={12}
                      value={this.state.location}
                      label="Location"
                      onChange={this.handleLoc}
                    />
                  </Col>
                  <Col s={3}>
                    <Input s={12}
                      value={this.state.trainername}
                      label="Trainer Name"
                      onChange={this.handleName}
                    />
                  </Col>







                </Row>
          </div>
        </Row>

        
        <Row>

        <Row>
          {(this.state.profileStatus===0) ? <PokePost  className= "pokePost" auth={this.state.profile.name} size={this.state.size}  trades={this.state.trades} />
  
        :
        <PokeProfile email={this.state.profile.name} />}
        </Row>

            <Row className="chatArea">
          <PokeChat email={this.state.profile.name}/>
          </Row>



          <PokeCarousel tradeList ={this.props} auth={this.state.profile.name}/>
        </Row>

        <Row>
          <RefFooter />
        </Row>
        </div>

        : <div className="preLoad">
          
          <Row>
        <Router history = {history}>
            <Navbar brand='Pokemon Go Trading Post: Austin' right>
               
               
               {(this.state.profileStatus===0)
               ?<NavItem onClick={() => this.changePro()}
               >Your Trades</NavItem>
               : <NavItem onClick={() => this.changePro()}
               >Home</NavItem>}
  
              {
                auth.isAuthenticated() ? 
                <NavItem onClick={() => auth.logout()}> Log Out </NavItem>:
                <NavItem onClick={() => auth.login()}>  Log In </NavItem>
              }
       
              <Route path="/callback" render={(props) => {
                  auth.handleAuthentication(props);
                   return <Callback {...props} /> 
              }}/>


              {/* <Route path="/" render={(props) => <Profile auth={auth} {...props} />} /> */}
            </Navbar>
          </Router>
        </Row>


        <Row>
          <RefFooter />
        </Row>
          
          
          </div> }




      </div>






    );
  }
}

export default observer(App);

