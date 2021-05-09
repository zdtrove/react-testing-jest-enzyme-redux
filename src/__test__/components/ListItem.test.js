import { shallow } from 'enzyme'
import ListItem from '../../components/listItem/ListItem'
import { checkProps, findByTestAttr } from '../../utils/testUtils'

describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        test('Should NOT throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text',
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })
    describe('Component Renders', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some text',
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        test('Should renders without error', () => {
            const component = findByTestAttr(wrapper, 'list-item-component')
            expect(component.length).toBe(1)
        })
        test('Should renders a title', () => {
            const title = findByTestAttr(wrapper, 'title')
            expect(title.length).toBe(1)
        })
        test('Should renders a desc', () => {
            const desc = findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })
    })
    describe('Should NOT render', () => {
        let wrapper
        beforeEach(() => {
            const props = {
                desc: 'Some text',
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        test('Component is not rendered', () => {
            const component = findByTestAttr(wrapper, 'list-item-component')
            expect(component.length).toBe(0)
        })
    })
})