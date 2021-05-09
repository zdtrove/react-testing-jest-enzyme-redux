import React from 'react'
import { shallow } from 'enzyme'
import Headline from '../../components/headline/Headline'
import { checkProps, findByTestAttr } from '../../utils/testUtils'

const setup = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {
        test('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: 23,
                    onlineStatus: false,
                }]
            }
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

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