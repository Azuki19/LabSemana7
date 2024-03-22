import styles from './Character.css';

export enum Attribute {
	'image' = 'image',
	'name' = 'name',
	'status' = 'status',
	'species' = 'species',
	'type' = 'type',
	'origin' = 'origin',
	'episode' = 'episode',
}

class myCharacters extends HTMLElement {
	image?: string;
	name?: string;
	status?: string;
	species?: string;
	type?: string;
	origin?: string;
	episode?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
			name: null,
			status: null,
			species: null,
			type: null,
			origin: null,
			episode: null,
		};
		return Object.keys(attrs);
	}
	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./src/components/Character/Character.css">
            <section class="container">
            <img src="${this.image}"></img>
            <h1>${this.name}</h1>
						<div class='info-container'>
            <p><b>Status: </b>${this.status}</p>
            <p><b>Species:</b> ${this.species}</p>
            <p><b>Type: </b> ${this.type ? this.type : 'Normal'}</p>
            <p><b>Origin:</b> ${this.origin}</p>
            <p><b>Episodes:</b>  ${this.episode}</p>
						</div>
            </section>`;
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

export default myCharacters;
customElements.define('my-characters', myCharacters);
