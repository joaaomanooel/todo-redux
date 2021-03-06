import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../src/core/app';

describe('Testing App component', () => {
  it('Should render correctly', () => {
    const wrapper = shallow(
      <App />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
