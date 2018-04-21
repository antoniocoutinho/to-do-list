import React from 'react'
import { shallow, mount } from 'enzyme'
import ColumnList from './ColumnList'

describe('<ColumnList/>', () => {
    it('Shallow rendes correctly', () => {
        expect(shallow(<ColumnList />))
    })
    it('mount correctly', () => {
        expect(mount(<ColumnList />))
    })
    it('Renders form if title equals To Do', () => {
        const wrapper = mount(<ColumnList title='To Do' />)
        expect(wrapper.find('form').length).toBe(1)
    })
    it('does not render form if title equals To Do', () => {
        const wrapper = mount(<ColumnList title='Done' />)
        expect(wrapper.find('form').length).toBe(0)
    })
    const items = [{ id: 0, title: 'an errand to run', status: 'To Do' }]

    it('expects to map through an array of items and creates a li tag for each one of them', () => {
        const wrapper = mount(<ColumnList title="To Do" items={items} />)

        expect(wrapper.find('li').length).toBe(1)
    })
})