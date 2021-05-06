import Dep from './Dep.js';
export default class Observer {
  constructor(data) {
    this.data = data;
    if (!data || typeof data !== 'object') {
      return;
    }
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key]);
    })
    return data;
  }
  defineReactive(data, key, value) {
    const dep = new Dep();
    new Observer(value);
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        console.log(dep);
        return value;
      },
      set(newValue) {
        if (newValue === value) return false;
        value = newValue;
        dep.notify();
      }
    })
  }
}