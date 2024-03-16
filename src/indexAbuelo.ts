import {getCharacters}  from './data/fetchRickMorty';


class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
    for (let i = 0; i < ${characterNumber}; i++)
    {
    const data = await getCharacters(i);
    console.log(data)
    this.render(data);
  }
    }


    render(data : any) {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `
        <h1>${data.name}</h1>
              `;

              this.shadowRoot.innerHTML +=`<my-card name='${data.name}'></my-card>`
        }
      }
	}

customElements.define('app-container', AppContainer);