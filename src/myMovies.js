import { LitElement, html } from "lit-element";

class MyMovies extends LitElement {
    static get properties() {
        return {
        title: { type: String },
        items: { type: Array }
        };
    }

    constructor() {
        super();
        this.title = "My Favorites Movies";
        this.items = [];
    }

    render() {
        return html`
        <h1>${this.title}</h1>
        <ul>
            ${this.items.map((item) => html`<li>${item.name + " " + "(" + item.year + ")"}</li>`)}
        </ul>
        `;
    }
}

customElements.define("my-movies", MyMovies);