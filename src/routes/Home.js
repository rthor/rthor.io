import React from 'react'
import Container from '../components/Container'
import Link from '../components/Link'

export default {
  path: '/',

  action() {
    return (
      <Container>
        <Link href="/about">About</Link>
      </Container>
		)
  }
}
