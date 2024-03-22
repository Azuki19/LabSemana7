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
					<link rel="stylesheet" href="../src/components/character/character.css">
					<section id="container">
					<img src="${this.image}"></img>
					<h1>${this.name}</h1>
					<p>Status: ${this.status}</p>
					<p>Species: ${this.species}</p>
					<p>Type:  ${this.type ? this.type : 'Normal'}</p>
					<p>Origin: ${this.origin}</p>
					<p>Name of first episode: ${this.episode}</p>
					</section>
					`;
		}
	}
}

export default myCharacters;
customElements.define('my-characters', myCharacters);
