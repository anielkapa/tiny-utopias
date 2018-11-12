import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import frank_aussen from './frank_aussen.jpg';
import frank_spielplatz from './frank_spielplatz.jpg';
import hoch from "./hoch portfolio neu.png";
import hyperkatoikia_aussen from "./hyperkatoikia_aussen.jpg";
import hyperkatoikia_brucken from "./hyperkatoikia_brucken.jpg";
import hyperkatoikia_konzept from "./hyperkatoikia_konzept.jpg";
import modulus_bibliothek from "./modulus_bibliothek.jpg";
import modulus_explosionsaxo from "./modulus_explosionsaxo.jpg";
import modulus_innenhof from "./modulus_innenhof.jpg";

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
        projects: [
          {name: "frank", img: [frank_spielplatz,frank_aussen ]},
          {name: "hyperkatoikia", img: [hyperkatoikia_brucken ,hyperkatoikia_aussen,hyperkatoikia_konzept ]},
          {name: "modulus", img:[modulus_explosionsaxo, modulus_bibliothek,  modulus_innenhof]},
          {name: "hoch", img: [modulus_innenhof]}
        ],
        active: [true, true, true, true]
    };
  }
  componentWillReceiveProps(nextProps){

  }
  componentDidMount() {
     console.log('component did mount')
   }

   componentWillUnmount() {

   }

  createImages = () =>{
    let imageObjList = this.state.projects;
    let imgList = imageObjList.map((element,index)=>{
      let styles = {
        root: {

        }
      };
      return(
            <div key={index} className="imageContainer">
                <div style = {{ backgroundImage: 'url(' + element.img[0] + ')',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                width: "75%",
                                height: "80vh",
                              }}  >

                </div>
            </div>
    )
    });
    return imgList;
  }
  toggleClass =(index) =>{
    const currentState = this.state.active;
    currentState[index] = !currentState[index];
    this.setState({ active: currentState });
  }
  render(){
      return(


          <div className="listContainer">
            {this.createImages()}
          </div>

      );
    }

}

export default Portfolio;
