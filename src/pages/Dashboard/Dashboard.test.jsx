import React from 'react';
import { shallow, mount } from 'enzyme'
import Dashboard from './index';

describe('Dashboard Component', () => {

  it('should render Dashboard component', () => {
    shallow(<Dashboard />);
  });

});
