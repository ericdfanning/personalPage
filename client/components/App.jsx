import React from 'react';
import {commands} from '../model/commands'

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

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		return alert('type "help" for a list of commands')
	// 	}, 3000)
	// }

	enterPressed(e) {
		e.preventDefault()
		console.log('event', e.target.commandLineInput.value)

		let input = e.target.commandLineInput.value

		var el = document.getElementById('terminalBody')

		let terminalOwnerElement = document.createElement('div');
		terminalOwnerElement.innerHTML = 'Eric-Fannings-MacBook:~ EFanning$ ' + input
		el.append(terminalOwnerElement)
		e.target.commandLineInput.value = ''

 		// create element to insert into the terminal window
		let commandResult = document.createElement('div');

		if (commands[input]) {
			if (input === 'help') {
				for (let i = 0; i < commands.help.length; i++) {
					let commandResultHelp = document.createElement('div');
					i === 0 ? commandResultHelp.style.cssText = 'margin-left:10px;': commandResultHelp.style.cssText = 'margin-left:25px;';
					commandResultHelp.innerHTML = commands.help[i]
					el.append(commandResultHelp)
				}
			} else {
				// set top and bottom margin for readability for commands with returned info
				commandResult.style.cssText = 'margin-top:20px;margin-bottom:20px;margin-left:25px;'
				commandResult.innerHTML = commands[input]
				// add element to the terminal window
				el.append(commandResult)
		  }

		} else {
			// if command not recognized, return this 'error' statement
			commandResult.innerHTML = '-bash: ' + input + ': command not found'
			el.append(commandResult)
		}

	}

	render () {
		return (
			<div className="mainBody">
			  <div id="terminalBody">
			  </div>

				<div className="commandLine">
					<div className="container-fluid">
					  <div className="row">
							<div className="col-sm-3.5 terminalOwnerName">Eric-Fannings-MacBook:~ EFanning$ </div>
							<div className="col-sm-8.5 commandLineInput">
								<form onSubmit={this.enterPressed.bind(this)}>
					        <input style={{fontFamily: "Courier New"}} name="commandLineInput" autoFocus="autoFocus"/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App