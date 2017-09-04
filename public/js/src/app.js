// globally import bootstrap
import 'bootstrap';
import registerCustomElement from 'preact-custom-element';

// import all components here
import { HelloWorld }     from './components/hello-world/hello-world';
import { MarkdownEditor } from './components/markdown-editor/markdown-editor';

registerCustomElement(HelloWorld,     'hello-world');
registerCustomElement(MarkdownEditor, 'markdown-editor');