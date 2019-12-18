import React from "react";
import { mount } from 'enzyme'
import WizardForm1 from './WizardForm1';

describe('WizardForm1', () => {
    it('match to initial snapshot', () => {
        const wrapper = mount(<WizardForm1></WizardForm1>);
        expect(wrapper).toMatchSnapshot();
    })

    it('renders props', () => {
        const wrapper = mount(<WizardForm1></WizardForm1>);
        expect(wrapper.props().amount).toBe(undefined)
    })
    
    // it('check the values', () => {
    //     const wrapper = mount(<WizardForm1></WizardForm1>);
    //     wrapper.find('input').simulate('change', {target: {  value: '200000'}});
    //     wrapper.update();
    //     expect(wrapper.find('input')).toBe('200000');
    // })
})