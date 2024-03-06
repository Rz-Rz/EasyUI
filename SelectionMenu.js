export default class SelectionMenu {
  constructor( options, onSelectCallback) {

    this.options = options;
    this.onSelectCallback = onSelectCallback;

    this.container = document.createElement('div');
    this.container.className = 'selection-menu-container';

    this.list = document.createElement('ul');
    this.list.className = 'maps-list';
    this.options.forEach((option) => {
      const listItem = document.createElement('li');
      listItem.className = 'map-option';

      const thumbnail = document.createElement('img');
      thumbnail.src = option.thumbnail;
      thumbnail.alt = `Thumbnail for ${option.name}`;
      thumbnail.className = 'map-thumbnail';

      // const text = document.createElement('span');
      // text.textContent = option.name;
      // text.className = 'map-name';

      listItem.appendChild(thumbnail);
      // listItem.appendChild(text);

      listItem.onclick = () => this.onSelect(option);
      this.list.appendChild(listItem);
    });
    this.container.appendChild(this.list);
  }

  onSelect(option) {
    console.log('Selected option:', option.name);
    if (typeof this.onSelectCallback === 'function') {
      this.onSelectCallback(option);
    }
  }

  attachTo(parent) {
    parent.appendChild(this.container);
  }
}
