import React from 'react'
import { checkProps, findByTestAttr } from '../../utils/testUntils'
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
        beforeEach(() => {
            const props = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            }
            wrapper = shallow(<Button {...props} />)
        })
        test('Should render a button', () => {
            const button = findByTestAttr(wrapper, 'button-component')
            expect(button.length).toBe(1)
        })
    })
})