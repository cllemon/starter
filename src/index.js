import { hot } from 'react-hot-loader';
import React, { useState } from 'react';
import ReactDom from 'react-dom';

const App = hot(module)(() => {
  const [title, setTitle] = useState('hello, world!');

  const reversedTitle = () =>
    setTitle(
      title
        .split('')
        .reverse()
        .join('')
    );
  return (
    <div>
      <h1>{title}</h1>
      <button type='button' onClick={reversedTitle}>
        reversed title!
      </button>
    </div>
  );
});

ReactDom.render(<App />, document.getElementById('root'));
