import styles from './Character.css';

export enum Attribute {
	'name' = `name`,
	'uid' = `uid`,
	'image' = `image`,
	'status' = `status`,
	'species' = `species`,
	'type' = `type`,
	'origin' = `origin`,
	'episode' = 'episode',
}

class character extends HTMLElement {
	name?: string;
	uid?: number;
	image?: string;
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
			name: null,
			uid: null,
			image: null,
			status: null,
			species: null,
			type: null,
			origin: null,
			episode: null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string = '') {
		switch (propName) {
			case Attribute.uid:
				this.uid = newValue ? Number(newValue) : undefined;
				break;

			default:
				this[propName] = newValue;
				break;
		}

		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./src/components/Character/Character.css">
   <section class='container'>

   <img src="${this.image}" ><img>
	 <h1><b> Name: </b>${this.name}</h1>

	 <div class='info-container '>
   <p><b> Id: </b>${this.uid}</p>
	 <p><b> Status: </b>${this.status}</p>
   <p><b> Species: </b>${this.species}</p>
   <p><b> Type: </b>${this.type}</p>
   <p><b> Origin: </b>${this.origin}</p>
	 <p><b> First Episode: </b>${this.episode}</p>
	 </div>
   </section>
   `;
		}
		const cssProfile = this.ownerDocument.createElement('style');
		cssProfile.innerHTML = styles;
		this.shadowRoot?.appendChild(cssProfile);
	}
}

export default character;
customElements.define('my-character', character);
