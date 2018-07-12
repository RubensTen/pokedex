import React from 'react';
import About from './index';
import { shallow } from 'enzyme';

fdescribe('Suit Test - About Component', () => {
    it('renders without crashing', () => {
        shallow(<About />);
    });

    it('renders text', () => {
        const wrapper = shallow(<About />);
        const content = <div>this is a about page</div>;
        expect(wrapper.contains(content)).toEqual(true);
    });
});