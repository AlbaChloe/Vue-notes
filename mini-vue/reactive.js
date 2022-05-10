// reactive -> vue3的实现


class Dep {
  constructor() {
    this.subscribers = new Set();   // 集合与数组唯一的区别是集合中的元素不会重复
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}


// Map({kay:value}): key 是一个字符串
// WeakMap({key(对象):value}): key是一个对象，弱引用
const targetMap = new WeakMap()
function getDep(target, key) {  // eg. target -> {counter: 100, name: "chloe"}  key -> counter (first time im traversal)
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);  // eg. now the targetMap -> {counter: 100, name: "chloe"}: {} (depsMap, also dependencies)
  }

  // 2. 取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);   // eg. now the depsMap -> counter : Dep{ subscribers:..., depend(){...}, notify(){...} }
  }
  // console.log(depsMap);
  return dep;
}

// vue3对row进行数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify()
    }
  });
}



// 测试代码
const info = reactive({ counter: 100, name: "chloe" });
const foo = reactive({ height: 1.58 });

// watchEffect1
watchEffect(function () {
  console.log("effect1->", info.counter * 2, info.name);
})

// watchEffect2
watchEffect(function () {
  console.log("effect2->", info.counter * info.counter);
}
)

// watchEffect3
watchEffect(function () {
  console.log("effect3->", info.counter + 10, info.name);
})

// watchEffect4
watchEffect(function () {
  console.log("effect4->", foo.height);
})


info.counter++;
// info.name = "chloe";
// foo.height = 2;