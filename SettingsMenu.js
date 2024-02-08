export default class SettingsMenu {
  constructor() {
    this.groups = {};
    document.addEventListener('DOMContentLoaded', () => {
      const settingsButton = document.querySelector('.expand-collapse-btn');
      const gameContainer = document.getElementById('gamecontainer');

      // Initially hide the settings menu to start with it collapsed
      gameContainer.style.display = 'none';

      settingsButton.addEventListener('click', () => {
        // Toggle display of the game container between 'block' and 'none'
        gameContainer.style.display = gameContainer.style.display === 'none' ? 'block' : 'none';
      });
    });
  }

  addGroup(name, parent) {
    const groupContainer = document.createElement('div');
    groupContainer.className = 'settings-group';
    parent.appendChild(groupContainer);

    const groupTitle = document.createElement('h3');
    groupTitle.textContent = name;
    groupContainer.appendChild(groupTitle);

    // Content container that can be shown or hidden 
    const contentContainer = document.createElement('div');
    contentContainer.style.display = 'none';
    groupContainer.appendChild(contentContainer);

    // Toggle visiblity on title click 
    groupTitle.addEventListener('click', () => {
      if (contentContainer.style.display === 'none') {
        contentContainer.style.display = 'block';
      } else {
        contentContainer.style.display = 'none';
      }
    });

    this.groups[name] = contentContainer;
  }

  addSliderToGroup(groupName, slider) {
    if (this.groups[groupName]) {
      slider.attachTo(this.groups[groupName]);
    } else {
      console.warn(`Group ${groupName} does not exist`);
    }
  }
}
