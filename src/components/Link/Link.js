import React from 'react'

const Link = ({ href, afterClick, ...rest }, { history }) => (
	<a href={href} {...rest} onClick={event => {
		if (history == null) {
			return
		}

		history.push(href)
		afterClick(href)
		event.preventDefault()
	}} />
)

Link.contextTypes = {
	history: React.PropTypes.object,
}

export default Link
