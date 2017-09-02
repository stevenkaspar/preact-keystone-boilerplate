
import './markdown-editor.scss';
import { h, Component } from 'preact';
import registerCustomElement from "preact-custom-element";
const marked = require('marked');

class MarkdownEditor extends Component{
  constructor({markdown = '### Howdy', options = '{}'}) {
    super();

    marked.setOptions( JSON.parse(options) );

    this.state.markdown = markdown;

    this.handleChange   = this.handleChange.bind(this);
  }

  getMarkdownHTML(){
    return {
      __html: marked(this.state.markdown)
    };
  }

  handleChange(event) {
    this.setState({markdown: event.target.value});
  }
  
  render(props, state){
    return (
    <div className='row'>
      <div className='col-xs-12 col-sm-6'>
        <textarea className='form-control' rows='10' value={state.markdown} onInput={this.handleChange}/>
      </div>
      <div className='col-xs-12 col-sm-6' dangerouslySetInnerHTML={this.getMarkdownHTML()}/>
    </div>);
  }

};

registerCustomElement(MarkdownEditor, "markdown-editor");

