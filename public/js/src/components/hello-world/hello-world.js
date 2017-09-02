import './hello-world.scss';
import { h, render, Component } from 'preact';
import registerCustomElement from "preact-custom-element";

class HelloWorld extends Component{
  constructor({name}) {
    super();
    this.state.name = name;
  }
  render(props, state){
    return (
      <p>Hello, {state.name}!</p>
    );
  }

};

registerCustomElement(HelloWorld, "hello-world");
