class ResponsiveObjectManager {
  contructor() {
    if (!ResponsiveObjectManager.instance) {
      ResponsiveObjectManager.instance = this;
    }
    return ResponsiveObjectManager.instance;
  }

  createResponsiveObject(target, onChange) {
    return new Proxy (target, {
      set(obj, prop, value) {
        const result = Reflect.set(obj, prop, value);
        onChange(prop, value);
        return result;
      }
    });
  }
}

const instance = new ResponsiveObjectManager();
Object.freeze(instance);

export default instance;

