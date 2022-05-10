class Dep {
  constructor() {
    this.subscribers = new Set();   // 集合与数组唯一的区别是集合中的元素不会重复
  }

  addEffect(effect) {
    this.subscribers.add(effect);  // add集合中的一个方法
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}



const info = { counter: 100 };

const dep = new Dep();

function doubleCounter() {
  console.log(info.counter * 2);
}

function powerCounter() {
  console.log(info.counter * info.counter);
}

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

// 修改完数据之后调用notify
info.counter++;
dep.notify();