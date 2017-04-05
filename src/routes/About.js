import React from 'react'
import Container from '../components/Container'

export default {
  path: '/about',

  action() {
    return (
      <Container>
        <h2>Hi there, fellow human being!</h2>
        <p>Currently, I'm doing cool things for the interwebs at <a href="https://aranja.com">Aranja</a> and organizing <a href="https://jsconf.is">JSConf Iceland</a>, which is super awesome! Coffee is my drug of choice and I tend to listen to the same music on repeat, for an extended period of time.</p>

        <h3>Question: Why is this website so… empty?</h3>
        <p>Unfortunately, I don't have time to make it better <abbr title="at the moment">atm</abbr>. Perhaps, it will be brilliant in the future, but ‘til then, find me online, at:</p>
        <ul>
          <li><a href="https://twitter.com/rthor">twitter</a></li>
          <li><a href="https://github.com/rthor">github</a></li>
          <li><a href="https://linkedin.com/in/rthor">linkedin</a></li>
        </ul>
      </Container>
		)
  }
}
