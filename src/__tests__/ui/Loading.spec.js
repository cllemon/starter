// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
// https://doc.ebichu.cc/jest/docs/zh-Hans/using-matchers.html#content

import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading/Loading';

describe('Loading 组件基础测试组合！', () => {
  it('<Loading /> 组件默认标题应该是 "loading..."', () => {
    const loading = shallow(<Loading />);
    expect(loading.find('span').text()).toBe('loading...');
  });
  it('<Loading /> 组件标题应该是 "加载中..."', () => {
    const loading = shallow(<Loading title="加载中..." />);
    expect(loading.find('span').text()).toBe('加载中...');
  });
});
