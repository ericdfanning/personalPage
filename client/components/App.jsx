import React from 'react';
import { commands } from '../model/commands'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
 			isMobile: false,
 			intruderAlert: false,
 			showCommandLineInput: true,
 			ownerText: 'Eric-Fannings-MacBook:~ EFanning$ '
		}
	}


	componentWillMount() {
		//check to see if device is laptop or phone
		var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    if (x < 481) {
    	this.setState({isMobile: true, ownerText: 'EFannings-Mac:~ $ '})
    } else {
    	this.setState({isMobile: false})
    }
	}

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		return alert('type "help" for a list of commands')
	// 	}, 3000)
	// }

	renderTextBox() {
		const mobileTag = <input style={{fontFamily: "Courier New", fontSize: "13px"}} name="commandLineInput" autoFocus="autoFocus"/>
		const desktopTag = <input style={{fontFamily: "Courier New"}} name="commandLineInput" autoFocus="autoFocus"/>
		return this.state.isMobile ? mobileTag: desktopTag;
	}

	yesNo(e) {
		e.preventDefault()
		let input = e.target.commandLineInput.value
		let el = document.getElementById('terminalBody')
		let intruderEl = document.getElementById('intruderProtocol')

		if (input.toUpperCase() === 'YES' || input.toUpperCase() === 'Y') {
		  let div = 'Hello again, Eric! You never can be too sure these days. Your information is secure.'
		  intruderEl.innerHTML = ''
			el.append(div)
			this.setState({intruderAlert: false})
		} else {
			let div = 'You are denied access to hidden files.'
			intruderEl.innerHTML = ''
			el.append(div)
			this.setState({intruderAlert: false})
		}
	}

	intruderProtocol() {

		return (
			<div className="normalCommand" id="intruderProtocol">
			  <div>Hello, Eric!</div>
			  <div>To access hidden files, your identity will have to be verified.</div>
			  <div>Please answer the following security question.</div>
			  <div className="container-fluid noCommandInput">
			    <div className="row">
						<div className="col-sm-3.5">Q: This is Eric, right? (yes/no) :</div>
						<div className="col-sm-8.5">
						 <form onSubmit={this.yesNo.bind(this)}>
							  {this.renderTextBox()}
						  </form>
						</div>
					</div>
				</div>
			</div>
		)
	}

	enterPressed(e) {
		e.preventDefault()
		// below is my way of having the input field always be focused at the bottom
		//set local var 'finished' to track synchronous run time. 
		var finished = false;
		// remove input field. Since setState is async, check local var once done 
		  // put the input field back into html if local code is done running. 
		this.setState({showCommandLineInput: false}, () => {
			finished === true ? this.setState({showCommandLineInput: true}): setTimeout(()=>{this.setState({showCommandLineInput: true})}, 500)
		})
		let input = e.target.commandLineInput.value

		var el = document.getElementById('terminalBody')
		var cl = document.getElementById('commandLine')
		cl.innerHTML = ''

		let terminalOwnerElement = document.createElement('div');
		terminalOwnerElement.innerHTML = this.state.ownerText + input
		el.append(terminalOwnerElement)
		e.target.commandLineInput.value = ''

 		// create element to insert into the terminal window
		let commandResult = document.createElement('div');

		if (commands[input.toUpperCase()]) {
			if (input.toUpperCase() === 'HELP') {
				for (let i = 0; i < commands.HELP.length; i++) {
					let commandResultHelp = document.createElement('div');
					commandResult.className = 'helpCommand allInput'
					i === 0 ? commandResultHelp.style.cssText = 'margin-left:10px;': commandResultHelp.style.cssText = 'margin-left:25px;';
					commandResultHelp.innerHTML = commands.HELP[i]
					el.append(commandResultHelp)
				}
			} else {
				// set top and bottom margin for readability for commands with returned info
				commandResult.className = 'normalCommand allInput'
				commandResult.innerHTML = commands[input.toUpperCase()]
				// add element to the terminal window
				el.append(commandResult)
		  }

		} else if (input === 'clear()') {
			this.setState({showCommandLineInput: false}, () => {
			  el.innerHTML = ''
				this.setState({showCommandLineInput: true})
			})
		} else if (input.toUpperCase() === 'HELLO') {

			this.setState({intruderAlert: true}, () => this.intruderProtocol())
		} else {
			// if command not recognized, return 'error' statement
			commandResult.className = 'noCommandInput allInput'
			commandResult.innerHTML = '-bash: ' + input + ': command not found'
			el.append(commandResult)
		}
		finished = true
	}

	renderCommandLine() {
    return (
			<div id="commandLine" className="commandLine">
				<div className="container-fluid">
				  <div className="row">
						<div className="col-sm-3.5 terminalOwnerName">{this.state.ownerText}</div>
						<div className="col-sm-8.5 commandLineInput">
							<form onSubmit={this.enterPressed.bind(this)}>
								{this.renderTextBox()}
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div id="mainBody" className="mainBody">
			  <div id="terminalBody">
				  {this.state.intruderAlert && this.intruderProtocol()}

				  {!this.state.intruderAlert && this.state.showCommandLineInput &&
				  	this.renderCommandLine()
				  }
				</div>
			</div>
		)
	}
}

export default App