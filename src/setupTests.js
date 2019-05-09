import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new EnzymeAdapter() })

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;