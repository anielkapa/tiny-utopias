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
import { Parallax, Background } from 'react-parallax';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
        projects: [
          {name: "frank", img: [frank_aussen, frank_spielplatz]},
          {name: "hoch", img: [hoch]},
          {name: "hyperkatoikia", img: [hyperkatoikia_aussen,hyperkatoikia_brucken ,hyperkatoikia_konzept ]},
          {name: "modulus", img:[modulus_bibliothek, modulus_explosionsaxo, modulus_innenhof]}
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
    const insideStyles = {
      background: "white",
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    };
    let imgList = imageObjList.map((element,index)=>{
      return(
      <div key={index} className={this.state.active[index]? null : 'large'}>
        <Parallax
            bgImage={element.img[0]}
            bgImageAlt={element.name}
            blur={{ min: -1, max: 3 }}
            strength={this.state.active[index]? 500 : 0}>
            <div
                onClick={e=>this.toggleClass(index)}
                className={this.state.active[index] ? "img_container parallax": "img_enlarge"}>
                <div
                    style={insideStyles}
                    className={this.state.active[index] ? "": "unvisible"}>
                    {element.name}
                </div>
            </div>
        </Parallax>
        <h1 alt="space"> </h1>
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
        <div className="list container">
          {this.createImages()}
        </div>
      );
    }

}

export default Portfolio;
