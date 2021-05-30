export const commands = (input) => {
	return commandsMap[input];
};

const commandsMap = {

	about: `TL;DR I'm an easy-to-work with, thorough, hard-working software engineer with a passion for helpfulness.<br>
		...I enjoy other stuff too.(See 'hobbies')<br><br>
		I'm a problem solver and have an entrepreneurial
 		spirit for creating anything that can help someone or make things more efficient.
		I take my quality of work seriously, but try not to take my work too seriously.
  	I think clean and easy to reason about code is just plain beautiful.
  	I give great attention to clarity and brevity in process and I enjoy improving documentation wherever I can.
  	If I'm not making it easier for whoever comes after me, then I'm doing it wrong.
  	I have a small ego and a big heart, with a love for helping others, which I had the privilege of doing in my last line of work.(See 'workHistory')
  	I love teamwork and thrive in its environment. But I also enjoy working alone because it allows me to put my head down to truck through whatever I'm working on.
  	I'm a self starter and I'm always looking to improve things where I can. (This is what drove most of the apps I've worked on.)<br><br>
  	To see what I can do, type 'skills'`,

	workhistory: `The Home Depot: <br>
		Senior Site Reliability Engineer | Sept 2020 - Present<br> 
		•	Ensure uptime of services. Deploy and monitor code changes. Try to automate myself out of a job.<br><br>
		Senior Software Engineer | Jan 2020 - Sept 2020<br> 
		Software Engineer | Jan 2018 - Jan 2020<br> 
	  •	Team Lead/Scrum Master of the company’s largest product category, namely, Appliances.
		Delivering mostly front-end (with some backend) features to the B2C .com site for increased customer experience and ease of use. 
		My team helps shape the user experience for the category that drives 40% of all sales. I led the migration of legacy code to React. An example of a large page I migrated can be seen <a href="https://www.homedepot.com/p/sets/a/b/c/package_235513899" target="_blank"> here</a> (package may be unavailable at time of viewing). This page was a large feature that brings in roughly $100 million a year in revenue.<br>
		See 'resume' for more<br><br>
	  Racine Police Department: ​Police​ ​Officer​ ​| ​Racine,​ ​WI 2010 - 2016<br>
	  •	I utilized​ ​critical​ ​thinking,​ ​problem​ ​solving,​ ​and​ ​communication​ ​skills​ ​in​ ​high
	  stress​ ​environments​ ​with​ ​a​ ​team​ ​to​ ​serve​ ​a​ ​diverse​ ​community​ ​of​ ​people.<br><br>
    ExploreUSA RV Supercenter: ​Sales​ ​&​ ​Finance​ ​Representative​ ​| ​Kyle,​ ​TX 2017<br>
    •	I provided​ ​RV​ ​knowledge​ ​to​ ​customers​ ​while​ ​listening​ ​to​ ​their​ ​needs​ ​to​ ​deliver​ ​the
    right​ ​product​ ​and​ ​the​ ​best​ ​financing​ ​options​ ​available​ ​to​ ​make​ ​it​ ​happen.`,

	education: `​Hack Reactor​: 2017 <br> Advanced​ ​Software​ ​Engineering​ ​Immersive<br><br>
	  University of Wisconsin Parkside​: 2009 ​<br> Bachelor​ ​of​ ​Arts​ ​in​ ​Criminal​ ​Justice`,

	contactinfo: `ericdfanning@gmail.com <br> (262) 237-2927`,

	"contact info": `ericdfanning@gmail.com <br> (262) 237-2927`,

	contact: `ericdfanning@gmail.com <br> (262) 237-2927`,

	somethingnooneknows: 'I cried during a Disney movie. yep',

	hobbies: 'I love spending time with my family (wife, two boys, and dog), coding, house projects, learning about day trading, digesting music, traveling, exercise (mostly thinking about it), FOOD!, other stuff, and trying new things.',

	skills: 'Experience with JavaScript, React, Redux, HTML, CSS/SASS, jQuery, Node/Express, Git, and Webdriver. Unit, Functional, and Browser testing.<br><br>Exposure to Heroku, Github Pages, Java, Bash, Python, SQL/NoSQL, MongoDB, and Webpack. A focus on modular, clean, well-tested, extensible, and readable code built with maintainability and tech debt in mind.<br><br>Combined with my organizational, coordination, and leadership skills, I know how to get features and initiatives done.<br><br>To see some examples, checkout <a href="resume.pdf" target="_blank"> MyResume.pdf </a> or type \'resume\'',

	projects: `
	  ***<br>For project description, just type the project name.<br> For other projects, type 'otherProjects'<br>***<br><br>
		Personnel Directory<br>
		Title Fraud Checker<br>
		Satelite Bot<br>
		Satellite<br>
		<a href="http://www.itsposhibly.com" target="_blank">Poshibly</a><br>
		<a href="https://www.npmjs.com/package/@tencoder/longpressreact" target="_blank">LongPress</a><br>
		Mock data server<br>
		Feature Switch Easy<br>
	  This page<br>
	  <a href="https://medium.com/@ericdfanning" target="_blank"> Medium </a>`,


  otherprojects: `
  	Open-Haberdashery: (in the works) A React, web based dashboard that communicates with an <a href="https://www.openhab.org/" target="_blank">OpenHab</a> backend to allow a user to control their smart home devices via desktop or mobile.<br><br>
  	Reseller Hub:​ ​An easy to use UI that displays ranked eBay sales data, utilizing MongoDB and eBay’s API, to improve market research for eBay resellers.<br><br>
  	10-43: A ​mobile​ ​app​ ​allowing​ ​searchable​ ​work-related​ ​data​ ​using​ ​Parse​ Cloud ​storage​ ​and CoreData​ ​in​ ​Swift.<br><br>
	  Easy Budget:​ Implemented a Parse cloud storage mobile budget app for simple budget keeping using Swift.<br><br>
	  Price Compare:​ Developed a Swift mobile app to keep track of prices across grocery stores using CoreData.<br><br>
	  Lifetime Capsule: Front-End | Implemented AngularJS web app to view and upload multimedia to a cloud platform.<br><br>
	  Concreet Cal:​ ​Front-End | Designed intuitive UI for calendar event editing via dynamic React modals connecting to Google’s calendar API.`,

	resume: `click -> <a href="resume.pdf" target="_blank"> MyResume.pdf </a> <br>`,

	//resume: `click -> <a href="resume.pdf" target="_blank"> MyResume.pdf </a> <br> click -> <a href="coolresume.pdf" target="_blank"> MyCoolerResume.pdf </a>`,

	links: `<a href="http://linkedin.com/in/ericdfanning" target="_blank"> linkedin.com/in/ericdfanning </a><br><br>` +
		`<a href="http://github.com/ericdfanning" target="_blank"> github.com/ericdfanning </a><br><br>` +
		`<a href="https://medium.com/@ericdfanning" target="_blank"> medium.com/@ericdfanning </a>`,

	'title fraud checker': 'A super basic NodeJS backend, hosted on Heroku, that scrapes my local County Tax Assessor\'s Office for a property search of my home and validates and displays the listed owner as me. Because who wants to pay monthly for title fraud services? I also found myself checking mutliple different crypto currency prices, so I added an API call for the coins I was checking frequently to display it in one place, reducing my web navigation and saving about 20 seconds. I then used that additional 20 seconds to not actually do anything productive and instead admire my \'efficiency\'.',

	'personnel directory': 'A Home Depot internal tool. An automated Slack Bot that consolidates data for multiple roles and areas of ownership to increase communication, speed, and discoverability for necessary partnerships and contacts. Automating this ensures contact and ownership lists are always up to date and removes the friction of not knowing who to contact, especially for high priorities.',
	
	'satellite bot': 'A Home Depot internal tool. A NodeJS backend that pulls SRE execution logs from BigQuery with a service account and constructs more relavent and ordered information that is then available via Slack. This cut down rollback time by 5-15 minutes, which reduces customer impact.',
	
	'satellite': 'satellite.homedepot.com was an internal facing enterprise application. It was a UI for devs and product managers that displays centralized data around story development to track a features\' progress from pull request through production deployment. This is backend heavy with NodeJS to gather, correlate and construct relevant data from multiple sources and display it with Vue.js.',

	'this page': 'With a simple React app, bundled with webpack and hosted on github pages (previously Heroku), I wanted an unconvential developer page. It\'s not flashy with styling and doesn\'t have any parallax effects, but it\'s my creative approach to engage others and non developers with my story.',

	'longpress': 'A React npm module that allows for long press functionality on click and touch web devices. It\'s a wrapper component that accepts callback functions and uses context to provide child elements the ability to conditionally render.<br><br><a href="https://www.npmjs.com/package/@tencoder/longpressreact" target="_blank">Click here</a> to check it out!',

	'poshibly': 'A Chrome Extension that automates social actions for professional resellers on Poshmark.com. Customer discoverability of sellers\' listings are heavily based on interactions from the seller. This extension automates those interactions and saves a seller several hours a day.<br><br><a href="http://www.itsposhibly.com" target="_blank">Click here</a> to check it out!',

	'mock data server': 'A Home Depot internal tool. Local development can be difficult without the right data. With meticulous documentation, I created a dynamically robust Java backend for mock data making it possible to fully test features during local development and in staging environments for all devs and QE\'s in the online Org.',

	'feature switch easy': 'A Home Depot internal tool. Instead of changing 6 files in the repo, with most contributors adding changes the wrong way, this script lets you add a feature switch to the repo in one line in the terminal ensuring contributor consistency.',

	'medium': '<a href="https://medium.com/@ericdfanning" target="_blank"> Click here </a> to check it out',

	other: `somethingNoOneKnows <br> hobbies <br> clear`,

	help: ['Try these commands: ', 'about', 'skills', 'resume', 'contactInfo', 'projects', 'workHistory', 'links', 'education', 'other'],

	ls: ['about', 'skills', 'resume', 'contactInfo', 'projects', 'workHistory', 'links', 'education', 'other'],

  // EASTER EGGS
	birds: 'RAWESOME!',
  lina: 'DIM SUM QUEEN SUPREME!!!',
	"BIRDS ARE AWESOME": 'YEAH YEAH YEAH DUDEROOSKI!!1',
	birdsareawesome: 'YEAH YEAH YEAH DUDEROOSKI!!1',
	henryetta: 'Lina is obbessed with this mystical coding creature.',
	johncena: `<img src="https://media.giphy.com/media/Vzku9jyuef09G/giphy.gif"></img>`,
	"NPM INSTALL GARBAGE": `<img src="https://media.giphy.com/media/yPD4GW3iSCaFW/giphy.gif"></img>`,
	howneat: 'Pretty neat!',
	howneatisthat: '<img src="https://media.giphy.com/media/7s45XYHzHCUpO/giphy.gif"></img>',
	"EASTER EGG?":'Good luck guessing the commands! If you do, they\'re pretty neat!',
	"EASTER EGG": 'Good luck guessing the commands! If you do, they\'re pretty neat!',
	"EASTEREGG": 'Good luck guessing the commands! If you do, they\'re pretty neat!'
}
