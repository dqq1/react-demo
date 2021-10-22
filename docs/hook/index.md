## site 的 hook 组件库

### 开始使用

```bash
yarn add @tms/sF-hook
```

```tsx | pure
import React, { useState } from 'react';
import { useWatch } from '@tms/sF-hook';

const App = () => {
    const [count, setCount] = useState(1);
    useWatch(count, (prev) => {
        console.log(prev, count);
    });

    return <div onClick={() => setCount((c) => c + 1)}>count:{count}</div>;
};

export default App;
```
