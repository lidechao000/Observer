import Dep from './Dep.js';

export default class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();
  }
  update() {
    this.run();
  }
  run() {
    const value = this.vm.data[this.exp];
    const oldValue = this.value;
    if (value !== oldValue) {
      this.value = value;
      this.cb.call(this.vm, value, oldValue);
    }
  }
  get() {
    Dep.target = this;
    const value = this.vm.data[this.exp];
    Dep.target = null;
    return value;
  }
}