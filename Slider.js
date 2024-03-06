import ResponsiveObjectManager from './ResponsiveObjectManager.js';
export default class Slider {
  constructor(label, min, max, step, targetObject, targetProperty) {
    this.label = label;
    this.min = min;
    this.max = max;
    this.step = step;
    this.targetObject = targetObject;
    this.targetProperty = targetProperty;

    this.container = document.createElement('div');
    this.container.className = 'slider-container';

    this.labelElement = document.createElement('label');
    this.labelElement.textContent = label;
    this.container.appendChild(this.labelElement);

    this.slider = document.createElement('input');
    this.slider.type = 'range';
    this.slider.min = min;
    this.slider.max = max;
    this.slider.step = step;
    this.container.appendChild(this.slider);

    this.valueDisplay = document.createElement('span');
    this.initialValue = targetObject[targetProperty];
    this.slider.value = this.initialValue;
    this.valueDisplay.textContent = this.initialValue;
    this.container.appendChild(this.valueDisplay);

    const responsiveTarget  = ResponsiveObjectManager.createResponsiveObject(targetObject, (prop, value) => {
      if (prop === targetProperty) {
        this.valueDisplay.textContent = value;
      }
    });

    this.slider.oninput = (e) => {
      const newValue = parseFloat(e.target.value);
      this.valueDisplay.textContent = newValue; // Update the display
      this.targetObject[this.targetProperty] = newValue; // Update the property
      if (typeof this.targetObject.updateGeometry === 'function') {
        this.targetObject.updateGeometry(); // Update the geometry if it exists
      }
    }

  }

  attachTo(parent) {
    parent.appendChild(this.container);
  }
}
