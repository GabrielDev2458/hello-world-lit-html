import { LitElement, html } from "lit-element";

class MyMessage extends LitElement {

    static get properties() {
        return {
        message: { type: String }
        };
    }

    constructor() {
        super();
        this.message = "";
    }

    render() {
        return html` <h1>${this.message}</h1> `;
    }

}

customElements.define("my-message", MyMessage);