import App from '../App'
import { shallow } from 'enzyme'
import { findByTestAttr, testStore } from '../utils/testUtils'
import React from 'react'

const setup = (initialState = {}) => {
	const store = testStore(initialState)
	const wrapper = shallow(<App store={store} />).childAt(0).dive()
	return wrapper
}

describe('App Component', () => {
	let wrapper
	beforeEach(() => {
		const initialState = {
			posts: [
				{
					title: 'Example title',
					body: 'Some text'
				},
				{
					title: 'Example title',
					body: 'Some text'
				},
				{
					title: 'Example title',
					body: 'Some text'
				}
			]
		}
		wrapper = setup(initialState)
	})
	test('Should render without errors', () => {
		const component = findByTestAttr(wrapper, 'app-component')
		expect(component.length).toBe(1)
	})
	test('exampleMethod_updatesState Method should update state as expected', () => {
		const classInstance = wrapper.instance()
		classInstance.exampleMethod_updatesState()
		const newState = classInstance.state.hideBtn
		expect(newState).toBe(true)
	})
	test('exampleMethod_returnsAValue Method should return value as expected', () => {
		const classInstance = wrapper.instance()
		const newValue = classInstance.exampleMethod_returnsAValue(6)
		expect(newValue).toBe(7)
	})
})