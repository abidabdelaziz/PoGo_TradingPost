import React, { Component } from 'react';

import { Collection, CollectionItem, Card, CardTitle} from "react-materialize"


class PokePost extends Component {
    render() {
      return (
          <div>

              <Collection>
                  <CollectionItem s={12}>
                          <Card horizontal header={<CardTitle image="../Pokemon/pokemon_icon_004_00.png"></CardTitle>} actions={[<a href='#'>Make an Offer</a>]}>
                          <div>
                            <p> Charmander</p>
                            <p> CP: 460 </p>
                            <p> Quick Move: Tackle</p>
                            <p> Charge Move: Flamethrower</p>
                            <p> Gender: Male</p>
                            <p> Trainer : Bill </p>
                            <p> Trainer Notes: Hes pretty neat!  </p>
                        </div>
                          </Card>
                  </CollectionItem>
                  <CollectionItem s={12}>
                          <Card horizontal header={<CardTitle image="../Pokemon/pokemon_icon_006_00.png"></CardTitle>} actions={[<a href='#'>Make an Offer</a>]}>
                          <div>
                            <p> Charizard</p>
                            <p> CP: 2040 </p>
                            <p> Quick Move: Wing Attack</p>
                            <p> Charge Move: Fireblast</p>
                            <p> Gender: Female</p>
                            <p> Trainer : Bill </p>
                            <p> Trainer Notes: Hotter than hell!  </p>
                        </div>
                          </Card>
                  </CollectionItem>
                  <CollectionItem s={12}>
                          <Card horizontal header={<CardTitle image="../Pokemon/pokemon_icon_001_00.png"></CardTitle>} actions={[<a href='#'>Make an Offer</a>]}>
                          <div>
                            <p> Bulbasaur</p>
                            <p> CP: 800 </p>
                            <p> Quick Move: Pound</p>
                            <p> Charge Move: Razor Leaf</p>
                            <p> Gender: Female</p>
                            <p> Trainer : Bill </p>
                            <p> Trainer Notes: Candy Farming  </p>
                        </div>
                          </Card>
                  </CollectionItem>
                  <CollectionItem s={12}>
                          <Card horizontal header={<CardTitle image="../Pokemon/pokemon_icon_008_00.png"></CardTitle>} actions={[<a href='#'>Make an Offer</a>]}>
                          <div>
                            <p> Wartortle</p>
                            <p> CP: 720 </p>
                            <p> Quick Move: Bubble</p>
                            <p> Charge Move: Surf</p>
                            <p> Gender: Male</p>
                            <p> Trainer : Bill </p>
                            <p> Trainer Notes: He likes sunglasses. </p>
                        </div>
                          </Card>
                  </CollectionItem>
                  
              </Collection>

          </div>
    );
}
}

export default PokePost;