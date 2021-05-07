import React from 'react'
import { shallow } from 'enzyme'
import Headline from '../headline/Headline'
import { findByTestAttr } from '../../utils/testUntils'

const setup = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe('Headline Component', () => {

    describe('Have props', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc',
            }
            wrapper = setup(props)
        })
        test('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headline-component')
            expect(component.length).toBe(1)
        })
        test('Should render a H1', () => {
            const h1 = findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })
    })

    describe('Have NO props', () => {
        let wrapper
        beforeEach(() => {
            wrapper = setup()
        })
        test('Should not render', () => {
            const component = findByTestAttr(wrapper, 'header-component')
            expect(component.length).toBe(0)
        })
    })
})