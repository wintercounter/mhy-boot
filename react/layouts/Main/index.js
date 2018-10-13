import React from 'react'
import { node } from 'prop-types'

import { main, content } from './styles.scss'

const Index = ({ children }) => (
    <main className={main}>
        <section className={content}>{children}</section>
    </main>
)

Index.propTypes = {
    children: node.isRequired
}

export default Index
