import React from 'react'
import {shallow, mount} from 'enzyme'
import ColumnList from './ColumnList'

describe('<ColumnList/>', () =>{
    it('Shallow rendes correctly', () => {
        expect(shallow(<ColumnList />))
    })
    it('mount correctly', () => {
        expect(mount(<ColumnList />))
    })
    it('Renders form if title equals To do', ()=> {
        const wrapper = mount(<ColumnList columnTitle='To do'/>)
        expect(wrapper.find('form').length.toBe(1))
    })
})