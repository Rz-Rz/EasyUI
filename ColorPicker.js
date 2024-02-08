export default class ColorPicker {
  constructor(label, initialValue, onChange) {
    this.label = label;
    this.initialValue = initialValue;
    this.onChange = onChange;

    this.container = document.createElement('div');
    this.container.className = 'color-picker-container';

    this.labelElement = document.createElement('label');
    this.labelElement.textContent = label;
    this.container.appendChild(this.labelElement);

    this.colorPicker = document.createElement('input');
    this.colorPicker.type = 'color';
    this.colorPicker.value = initialValue;
    this.colorPicker.oninput = (e) => this.onChange(e.target.value);
    this.container.appendChild(this.colorPicker);
    }

  attachTo(parent) {
    parent.appendChild(this.container);
  }

}
