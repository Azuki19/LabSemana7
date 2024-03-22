import { getCharacters } from './data/fetchRickMorty';
import myCharacters, { Attribute } from './components/Character/Character';

class AppContainer extends HTMLElement {
	characters: myCharacters[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	async connectedCallback() {
		const numCharactersInput = document.createElement('input');
		numCharactersInput.id = 'numCharactersInput';
		numCharactersInput.type = 'number';
		numCharactersInput.placeholder = 'Número de personajes';
		this.shadowRoot?.appendChild(numCharactersInput);

		const submitButton = document.createElement('button');
		submitButton.textContent = 'Submit';
		submitButton.id = 'submitButton';
		this.shadowRoot?.appendChild(submitButton);

		const button = this.shadowRoot?.getElementById('submitButton');
		button?.addEventListener('click', async () => {
			try {
				const numCharactersInput = this.shadowRoot?.getElementById('numCharactersInput') as HTMLInputElement;
				const characterNumber = parseInt(numCharactersInput.value);
				if (!isNaN(characterNumber)) {
					this.characters = [];

					for (let i = 1; i <= characterNumber; i++) {
						const data = await getCharacters(i);
						this.render(data);
					}
				} else {
					alert('Por favor ingrese un número válido');
				}
			} catch (error) {
				console.error('Error:', error);
			}
		});
	}

	render(characterData: any) {
		const characterCard = this.ownerDocument.createElement('my-characters') as myCharacters;
		characterCard.setAttribute(Attribute.image, characterData.image);
		characterCard.setAttribute(Attribute.name, characterData.name);
		characterCard.setAttribute(Attribute.status, characterData.status);
		characterCard.setAttribute(Attribute.species, characterData.species);
		characterCard.setAttribute(Attribute.type, characterData.type);
		characterCard.setAttribute(Attribute.origin, characterData.origin.name);
		characterCard.setAttribute(Attribute.episode, characterData.episode);
		this.characters.push(characterCard);

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			this.characters.forEach((characterElement) => {
				this.shadowRoot?.appendChild(characterElement.cloneNode(true));
			});
		}
	}
}

customElements.define('app-container', AppContainer);
