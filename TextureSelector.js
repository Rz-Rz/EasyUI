class TextureSelector {
  constructor(options, onSelectCallback, onTransparencyChange) {
    this.options = options;
    this.onSelectCallback = onSelectCallback;
    this.onTransparencyChange = onTransparencyChange;

    // Create the container for the selector
    this.container = document.createElement('div');
    this.container.className = 'texture-selector-container';

    // Create the dropdown menu for texture selection
    this.createDropdown();
    // Create the slider for transparency control
    this.createTransparencySlider();
  }

  createDropdown() {
    const select = document.createElement('select');
    select.addEventListener('change', (event) => {
      const selectedOption = this.options.find(option => option.label === event.target.value);
      this.onSelectCallback(selectedOption);
    });

    this.options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option.label;
      optionElement.value = option.label;
      select.appendChild(optionElement);
    });

    this.container.appendChild(select);
  }

  createTransparencySlider() {
    const sliderContainer = document.createElement('div');
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.1;
    slider.value = 1; // Start with fully opaque
    slider.addEventListener('input', (event) => {
      this.onTransparencyChange(event.target.value < 1, parseFloat(event.target.value));
    });

    sliderContainer.appendChild(slider);
    this.container.appendChild(sliderContainer);
  }

  attachTo(parentElement) {
    parentElement.appendChild(this.container);
  }
}

