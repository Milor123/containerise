import css from '!!raw-loader!./styles/InformationElement.css';
import {createEl} from './utils';

export default class InformationElement extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(createEl(`<style>${css}</style>`));
    shadow.appendChild(createEl(`<span class="wrapper">
        <span class="icon">i</span>
        <span class="info">${this.textContent}</span>
    </span>
    `));

  }

}

customElements.define('c-information', InformationElement);
