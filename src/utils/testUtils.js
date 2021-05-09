import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../../src/reducers/rootReducer'
import { middlewares } from '../../src/configureStore'

export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsErr
}

export const testStore = (initialState) => {
	const testStore = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	)
	return testStore
}