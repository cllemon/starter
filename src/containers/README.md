# 容器组件 (Container Component)

## 准则

1. 单一职责原则，降低组件的耦合度
2. 提供数据（ 如：包含 Ajax 返回数据处理逻辑 ）
3. 与状态管理工具交互（ 如：包含 Redux 注入逻辑 ）
4. 有状态
5. 样式及 DOM 较少

## 样例

### ajax | 自定义 hook

```jsx
import React, { useState, useEffect } from 'react';
import { getUserInfo } from './network/';

function useUserInfo(userID) {
  const [userInfo, setUserInfo] = useState({});

  useEffect(async () => {
    try {
      const data = await getUserInfo({ userID });
      setUserInfo(data);
    } catch(error) {
      console.error(error);
    }
  }, [userID]);

  return userInfo;
}
```

### redux

```jsx
import { connect } from 'react-redux';
import Demo from '../Container/Demo';
import {
  incrementEnthusiasm,
  decrementEnthusiasm
} from '../actions/index';

export function mapStateToProps({ enthusiasm }) {
  return {
    enthusiasm,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
```
