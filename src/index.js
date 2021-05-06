import Observer from './Observer.js';
import Watcher from './Watcher.js';
window.data = new Observer({
  name: 'dddd',
  sub: {
    age: 1,
    sub: {
      aa: 1
    }
  }
});
new Watcher(window, 'name', function (value) {
  console.log('object setting', value);
});
new Watcher(window, 'sub', function (value) {
  console.log('object setting', value);
});