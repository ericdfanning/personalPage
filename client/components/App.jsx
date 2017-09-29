import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
 			isMobile: false
		}
	}


	componentWillMount() {
		var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    var mobile = false
    if (x < 481) {
    	mobile = true
    }
		this.setState({isMobile: mobile})
	}

	render () {
		return (
			<div>
			Hello World
			</div>
		)
	}
}


export default App