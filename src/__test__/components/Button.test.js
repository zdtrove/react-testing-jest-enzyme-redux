import React from 'react'
import { checkProps, findByTestAttr } from '../../utils/testUtils'
import Button from '../../components/button/Button'
import { shallow } from 'enzyme'

describe('Button Component', () => {
    describe('Checking PropTypes', () => {
        test('Should NOT throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            }
            const propsError = checkProps(Button, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Renders', () => {
        let wrapper
        let mockFunc
        beforeEach(() => {
            mockFunc = jest.fn()
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: mockFunc
            }
            wrapper = shallow(<Button {...props} />)
        })
        test('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'button-component')
            expect(button.length).toBe(1)
        })
        test('Should emit callback on click event', () => {
            const button = findByTestAttr(wrapper, 'button-component')
            button.simulate('click')
            const callback = mockFunc.mock.calls.length
            expect(callback).toBe(1)
        })
    })
})