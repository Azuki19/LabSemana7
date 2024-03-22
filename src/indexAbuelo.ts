import getRickandMorty from './data/fetchRickMorty';
import { character } from './components/indexPadre';
import style from './indexAbuelo.css';
import Mycharacter, { Attribute } from './components/Character/Character';

class AppContainer extends HTMLElement {
	characters: Mycharacter[] = [];
	characterCountInput: HTMLInputElement | null = null;
	charactersContainer: HTMLDivElement | null = null;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	// DESDE AQUIII

	connectedCallback() {
		this.render();
	}
	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			const cssContainer = this.ownerDocument.createElement('style');
			cssContainer.innerHTML = style;
			this.shadowRoot.appendChild(cssContainer);

			//FORM

			const form = document.createElement('form');
			form.id = 'form';
			form.addEventListener('submit', async (e) => {
				console.log('En addEvent listener');
				e.preventDefault();
				await this.createArray(Number(input.value));
				console.log(this.characters);
			});

			const input = document.createElement('input');
			input.type = 'number';
			input.placeholder = 'Intriduce a number here';
			input.value = '';
			input.className = 'number-input';

			const submitButton = document.createElement('input');
			submitButton.type = 'submit';
			submitButton.value = 'Get';
			submitButton.className = 'submit-input';

			form.appendChild(input);
			form.appendChild(submitButton);

			this.shadowRoot.appendChild(form);
		}
	}

	async createArray(number: number) {
		const charactersArray = [];
		for (let i = 1; i <= number; i++) {
			const character = await getRickandMorty(i);
			charactersArray.push(character);
		}
		this.renderCharacter(charactersArray);
	}

	renderCharacter(DataCharacter: any) {
		this.characters = DataCharacter.map((user: any) => {
			const mycharacterElement = this.ownerDocument.createElement('my-character') as Mycharacter;
			mycharacterElement.setAttribute(Attribute.image, user.image);
			mycharacterElement.setAttribute(Attribute.uid, String(user.id));
			mycharacterElement.setAttribute(Attribute.name, user.name);
			mycharacterElement.setAttribute(Attribute.status, user.status);
			mycharacterElement.setAttribute(Attribute.species, user.species);
			mycharacterElement.setAttribute(Attribute.type, user.type);
			mycharacterElement.setAttribute(Attribute.origin, user.origin.name);
			mycharacterElement.setAttribute(Attribute.episode, user.episode);
			return mycharacterElement;
		});

		if (this.shadowRoot) {
			this.characters.forEach((character) => {
				this.shadowRoot?.appendChild(character);
			});
		}
	}
}

customElements.define('app-container', AppContainer);
