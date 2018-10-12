import React, {Component} from "react";
import Card from "../Card/card"
import projects from "../../projects.json";
import Wrapper from "../../components/Wrapper";
import Particles from 'react-particles-js';
import Row from '../Row/Row';

class Portfolio extends Component {
  state = {
    projects: [...projects],
  };

  
render (){
  return (

    <Wrapper>
     <Particles></Particles>
  <Row>
  {this.state.projects.map( projects => (
    <Card 
    key = {projects.id}
    id = {projects.id}
    image = {projects.image}
    name = {projects.name}
    link = {projects.link}
    />
  ))}
  </Row>
</Wrapper>
  );
  
}
}
export default Portfolio;
