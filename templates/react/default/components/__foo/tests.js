import React from 'react'

test('render', () => {
    const wrapper = shallow(
        <div>Hello Jest!</div>
    )
    expect(wrapper).toMatchSnapshot()
})