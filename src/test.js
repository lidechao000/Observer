let person = {
  name: 'lidechao'
};

// 对象不可增加属性，已经属性可以修改跟删除
if (Object.isExtensible) {
  Object.preventExtensions(person);
  person.age = 30;
  console.log(person);
}

// 密封一个对象，如果writable = true 仅可以改变值，其他都不能改
if (Object.isSealed) {
  Object.seal(person);
  person.age = 30;
  delete person.name;
}

// 啥都不能改， 原型链上也不能改
if (Object.isFrozen) {
  Object.freeze(person);
}

// 设置对象描述器
Object.defineProperty(person, 'age', {
  value: 30,
  writable: false,
  configurable: false
})