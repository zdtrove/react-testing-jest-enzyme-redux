import React from 'react'
import { shallow } from 'enzyme'
import Header from '../header/Header'
import { findByTestAttr } from '../../utils/testUntils'

const setup = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}

describe('Header Component', () => {

    let component
    beforeEach(() => {
        component = setup()
    })

    test('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'header-component')
        expect(wrapper.length).toBe(1)
    })

    test('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logoIMG')
        expect(logo.length).toBe(1)
    })
})