import Preference from './Preference';
import {createEl} from './utils';

export default class ChoicePreference extends Preference {

  constructor({name, label, description, choices, defaultValue}) {
    super({name, label, description, defaultValue});
    this.choices = choices;
    if(this._defaultValue === undefined && this.choices.length > 0){
      this._defaultValue = this.choices[0].name;
    }
    this._addChoices();
  }

  _buildEl() {
    const el = document.createElement('form');
    return el;
  }

  _addChoices() {
    for (let choice of this.choices) {
      const checkedAttr = this._defaultValue === choice.name ? 'checked' : '';
      this.el.appendChild(createEl(`<div class="radio-container">
        <input type="radio" name="${this.name}" value="${choice.name}" ${checkedAttr}>
        <label for="${this.name}">${choice.label}</label>
        <div class="radio-container__description">${choice.description}</div>
    </div>
      `));
    }
  }

  get() {
    const formData = new FormData(this.el);
    return formData.get(this.name);
  }

  set({value}) {
    for (let $input of this.el.querySelectorAll('input')) {
      $input.checked = $input.value === value;
    }
  }
}

ChoicePreference.TYPE = 'choice';
