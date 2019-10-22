# UI Component

## 准则

1. 最基础的组件形式，如：按钮、标签。
2. 无状态
3. 纯静态展示作用
4. 组成的基本结构（props + render）
5. 不需要依赖生命周期
6. 单一职责，多处复用。

## 样例

```tsx
import * as React from 'react';

export interface IUIProps {
  name: string;
  age: number;
}

const UI: React.SFC<IUIProps> = ({ props: IUIProps }) => {
  const { name, age } = props;
  return (
    <div className="UI">
      { `${name}:` } { age }
    </div>
  );
};

export default UI;
```

```jsx
import React from 'react';
import PropTypes from 'prop-types';

function UI(props) {
  const { name, age } = props;
  return (
    <div className="UI">
      { `${name}:` } { age }
    </div>
  );
};

UI.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

UI.defaultProps = {
  name: '张三',
  age: 9
};

export default UI;
```
