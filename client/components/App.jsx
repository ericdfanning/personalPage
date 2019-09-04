import React from 'react';
import { commands } from '../model/commands'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			placeholder: true,
 			isMobile: false,
 			intruderAlert: false,
 			zork: false,
 			showZorkError: false,
 			showChuck: false,
 			showZorkInput: true,
 			showCommandLineInput: true,
 			ownerText: 'EFannings-Mac:~ $ '
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
    if (x <= 768) {
    	this.setState({isMobile: true})
    } else {
    	this.setState({isMobile: false})
    }
	}

	componentDidMount() { // in case someone doesn't know where to start, this delayed alert box gives them some help.

	}

	renderCommandLineTextArea() {
		const mobileTag = <input style={{fontFamily: "Courier New", fontSize: "13px"}} name="commandLineInput" autoFocus="autoFocus" autoComplete="off" placeholder={this.state.placeholder ? 'type help': ''}/>
		const desktopTag = <input style={{fontFamily: "Courier New"}} name="commandLineInput" autoFocus="autoFocus" autoComplete="off" placeholder={this.state.placeholder ? 'type help': ''}/>
		return this.state.isMobile ? mobileTag: desktopTag;
	}

	renderCommandLineTextAreaZork() {
		const mobileTag = <input style={{textAlign: "center", fontFamily: "Courier New", fontSize: "13px"}} name="commandLineInput" autoFocus="autoFocus" autoComplete="off" />
		const desktopTag = <input style={{textAlign: "center", fontFamily: "Courier New"}} name="commandLineInput" autoFocus="autoFocus" autoComplete="off" />
		return this.state.isMobile ? mobileTag: desktopTag;
	}

	yesNo(e) { // this function handles the special prompt response from the user, then returns the terminal to normal
		e.preventDefault()
		let input = e.target.commandLineInput.value
		let el = document.getElementById('terminalBody')
		let intruderEl = document.getElementById('intruderProtocol')

		if (input.toLowerCase() === 'yes' || input.toLowerCase() === 'y') {
		  let div = 'Hello again, Eric! You never can be too sure these days. Your information is secure.'
		  intruderEl.innerHTML = ''
			el.append(div)
			this.setState({intruderAlert: false})
		} else {
			let div = 'You are denied access to hidden files until you can answer \'yes\'.'
			intruderEl.innerHTML = ''
			el.append(div)
			this.setState({intruderAlert: false})
		}
	}

	renderIntruderProtocol() {
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
							  {this.renderCommandLineTextArea()}
						  </form>
						</div>
					</div>
				</div>
			</div>
		)
	}

	zorkInput(e) { // this function handles the special prompt response from the user, then returns the terminal to normal
		e.preventDefault()

		let input = e.target.commandLineInput.value
		// let div = 'You are denied access to hidden files until you can answer \'yes\'.'
		// intruderEl.innerHTML = ''
		if (input.toLowerCase() === 'attack troll with nasty knife') {
			this.setState({showZorkError: false, showZorkInput: false, showChuck: true})
		  setTimeout(() => {
			 this.setState({zork: false, showCommandLineInput: true, showZorkInput: false, showChuck: false})
		  }, 10000)
		} else {
			this.setState({showZorkError: true, showZorkInput: false, showChuck: false})
		  setTimeout(() => {
			 this.setState({zork: false, showCommandLineInput: true, showZorkInput: false, showZorkError: false})
		  }, 3000)
		}
	}

	renderTRS80Protocol() {
		return (
			<div id="zork">
			  <div>The terrible troll raises his sword
				 <form onSubmit={this.zorkInput.bind(this)}>
					  {this.renderCommandLineTextAreaZork()}
				  </form>
				</div>
			</div>
		)
	}

	enterPressed(e) {
		e.preventDefault()
		// set command line input to a variable
		let input = e.target.commandLineInput.value

		// below is my way of having the input field always be focused at the bottom
		//set local var 'finished' to track synchronous run time. 
		var finished = false;

		// remove command line so that command results can be appended. 
		  // Since setState is async, check local var once aysnc is finished.
		  // Then put the command line back into html if local code is done running. 
		this.setState({showCommandLineInput: false, placeholder: false}, () => {
			// If for some reason the synchronous run time is delayed, a timer is set to re-render with the command line inserted back in.
			finished === true ? this.setState({showCommandLineInput: true}): setTimeout(()=>{this.setState({showCommandLineInput: true})}, 1000)
		})

		// get the html element I will be manipulating and appending things to. I use the id to get it. 
		var el = document.getElementById('terminalBody')

		// The creates the fixed computer/user name that shows to the left of the command line.
		  // this part inparticular creates the same text but shows it as the last command that was input. 
		let terminalOwnerElement = document.createElement('div');
		terminalOwnerElement.innerHTML = this.state.ownerText + input

		if (input.toLowerCase() !== 'zork') {
		  el.append(terminalOwnerElement)
	  }

		// clear the command line of its text
		e.target.commandLineInput.value = ''

 		// create element to insert into the terminal window as the response/result of the command
		let commandResult = document.createElement('div');
 
 		// first if block handles all normal valid requests
		if (commands[input.toLowerCase()]) {
			// Special case for HELP prompt to display different command options
			if (input.toLowerCase() === 'help') {
				for (let i = 0; i < commands.help.length; i++) {
					let commandResultHelp = document.createElement('div');
					commandResult.className = 'helpCommand allInput'
					i === 0 ? commandResultHelp.style.cssText = 'margin-left:10px;': commandResultHelp.style.cssText = 'margin-left:25px;';
					commandResultHelp.innerHTML = commands.help[i]
					el.append(commandResultHelp)
				}
			} else { // Here I handle all normal valid commands that are not HELP or HELLO
				// set top and bottom margin for readability for commands with returned info
				commandResult.className = 'normalCommand allInput'
				commandResult.innerHTML = commands[input.toLowerCase()]
				// add element to the terminal window
				el.append(commandResult)
		  }

		} else if (input === 'clear()' || input === 'clear') { // clears all text from the screen and starts over. Clean slate.
			// In order to achieve this and overcome a bug, I removed the command line,
			  // cleared all command results and text, then inserted the command line back in.
			this.setState({showCommandLineInput: false}, () => {
			  el.innerHTML = ''
				this.setState({showCommandLineInput: true})
			})
		} else if (input.toLowerCase() === 'hello') { // Hello creates a special prompt with a fake/pathetic security question
			// render special prompt html to handle the hello event
			this.setState({intruderAlert: true}, () => this.renderIntruderProtocol())
		} else if (input.toLowerCase() === 'zork') {
			this.setState({showCommandLineInput: false}, () => {
			  el.innerHTML = ''
				this.setState({zork: true, showZorkInput: true})
			})
			// this.setState({zork: true, showCommandLineInput: false})

		} else {
			// Any other commands that are not recognized returns an 'error' statement
			commandResult.className = 'noCommandInput allInput'
			commandResult.innerHTML = '-bash: ' + input + ': command not found'
			el.append(commandResult)
		}

		finished = true // the variable used at the top of this function to handle showing the command line
	}

	closePopUp() {
		this.setState({showInitialAlert: false})
	}

	renderCommandLine() {
    return (
			<div id="commandLine" className="commandLine">
				<div className="container-fluid">
				  <div className="row">
						<div className="col-sm-3.5 terminalOwnerName">{this.state.ownerText}</div>
						<div className="col-sm-8.5 commandLineInput">
							<form onSubmit={this.enterPressed.bind(this)}>
								{this.renderCommandLineTextArea()}
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>

				{this.state.zork ?
					<div className="zork">
					  {this.state.showZorkInput && this.renderTRS80Protocol()}
					  {this.state.showChuck &&
					  	<div id="zork">
					  		<iframe src="https://giphy.com/embed/l1X9JyEpDkoRq"
					  			width="1152"
					  			height="650"
					  			frameBorder="0"
					  			className="giphy-embed"
					  			allowFullScreen>
					  		</iframe>
					  		<p><a href="https://giphy.com/gifs/chuck-l1X9JyEpDkoRq"></a></p>
					  	</div>
					  }
					  {this.state.showZorkError &&
					  	<div id="zork">
						  	<img src='http://www.epicfail.com/wp-content/themes/epicfail-mobile/dist/images/logo.svg'></img>
						  </div>
						}
					</div>
				:
					<div id="mainBody" className="mainBody">
					  <div id="terminalBody">
						  {this.state.intruderAlert && this.renderIntruderProtocol()}

						  {!this.state.intruderAlert && this.state.showCommandLineInput &&
						  	this.renderCommandLine()
						  }

						</div>
					</div>
			  }
			</div>
		)
	}
}

export default App