import {LitElement, html, css} from 'lit-element';
import "./helloWorld";
import "./myList";
import "./myMovies";
import "./createList"

class MyApp extends LitElement {

    render(){
        return html`
        <hello-world></hello-world>
        <my-list list='[{"name": "foo"},{"name": "faa"}]'></my-list>
        <my-movies 
            items='[
                {"name": "Interestelar", "year": 2014},
                {"name": "El origen", "year": 2010},
                {"name": "El lobo de Wall Street", "year": 2013},
                {"name": "Medianoche en París", "year": 2011},
                {"name": "El cisne negro", "year": 2010}
            ]'
            
        ></my-movies>
        <create-list 
            list='["Interestelar","El origen","El lobo de Wall Street","Medianoche en París","El cisne negro"]'
        ></create-list>
        `;
    }

}

customElements.define('my-app', MyApp);