import {LitElement, html, css} from 'lit-element';
import "./myMessage"

class HelloWorld extends LitElement {

    render(){
        return html`
        <p>Hello world!!</p>
        <my-message message="Hola soy un mensaje dinamico"></my-message>
        `;
    }

}

customElements.define('hello-world', HelloWorld);