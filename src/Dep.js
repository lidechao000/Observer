export default class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    if (sub) {
      this.subs.push(sub);
    }
  }
  notify() {
    if (this.subs && this.subs.length) {
      this.subs.forEach(sub => {
        sub.update();
      })
    }
  }
}
Dep.target = null;