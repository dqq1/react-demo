---
title: useWatch
group:
    title: 常用-hook
    path: /hook-usually
    order: 1
---

# useWatch

### 基础用法

<code src="./demos/demo1.tsx">

### 首次挂载执行

<code src="./demos/demo2.tsx">

## API

```typescript
const [count, setCount] = useState(0);
useWatch(count, (prev) => {
    alert(`current: ${count}, prev: ${prev}`);
});
```

### Params

| 参数   | 说明                                   | 类型       | 默认值                 |
| ------ | -------------------------------------- | ---------- | ---------------------- |
| data   | 必须项,被观察的值                      | `any`      | `无`                   |
| cb     | 必须项,被观察的值改变后的回调函数      | `function` | `无`                   |
| config | 可选项, 配置是否在首次挂载执行监听回调 | `object`   | `{ immediate: false }` |

### Result

| 参数 | 说明             | 类型       |
| ---- | ---------------- | ---------- |
| fn   | 取消观察函数引用 | `function` |
