import { LitElement, html } from "lit-element";

class CreateList extends LitElement {
    static get properties() {
        return {
        title: { type: String },
        list: { type: Array }
        };
    }

    constructor() {
        super();
        this.title = "My Favorites Movies";
        this.list = [];
    }

    render() {
        return html`
            <button @click=${this.CreateList}>Create list</button> <button @click=${this.EmptyList}>Empty list</button>
            <h1>${this.title}</h1>
            ${ this.list.length === 0 ? "No hay datos..." : this.list.map((item) => html`<li>${item}</li>`) }
        `;
    }
    CreateList() {
        this.list = ["Mad Max","El Historia de un matrimonio","Jojo Rabbit","El rey león","Guasón"];
    }

    EmptyList() {
        this.list = [];
    }
}

customElements.define("create-list", CreateList);