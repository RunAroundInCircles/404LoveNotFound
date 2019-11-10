import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AcceptTwin from './acceptTwin.js';
import DenyTwin from './denyTwin.js';
import c from './characters/C.png';
import cplusplus from './characters/C++.png';
import './python.css';


var count = 0;
class twinroute extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		
		if(count == 0){
			var x = "*You look up to see the cutest boy you have ever laid your eyes on and a blush spreads across your face.*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			document.getElementById("cplusplus").hidden = false;
			var x = "Oh, I'm sorry are you okay?"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 2){
			var x = "*Before you could answer him a rude voice is heard from behind him*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 3){
			document.getElementById("c").hidden = false;
			document.getElementById("cplusplus").hidden = true;
			var x = "Gosh, C++ Could you stop blocking the way. And stop flirting in public, I'm gonna hurl.";
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 4){
			var x = "*He pushes past you and into the class*";
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 5){
			document.getElementById("c").hidden = true;
			document.getElementById("cplusplus").hidden = false;
			var x = "Sorry about my brother. He can get moody. Anyways, could I get your phone number? Just so I can take you out to lunch as an apology."
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 6){
			document.getElementById("textArea2").hidden = true;
			document.getElementById("accept").hidden = false;
			document.getElementById("deny").hidden = false;
		}
	}
	
	accept(){
		const element1 = (
			<AcceptTwin/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	deny(){
		
		document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
		const element1 = (
			<DenyTwin/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	
	render(){
		return(
			<body>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*In your haste to leave, you bump into someone on the way out*</textarea>
				<button type="button"id = "accept" onClick={this.accept} hidden = "true">Of course!</button>
				<button type="button"id = "deny" onClick={this.deny} hidden = "true">I don't have a phone.</button>
				<div class="bottomleft">
				<img id = "c"src= {c} alt="c" hidden ="true"/>
				<img id = "cplusplus"src= {cplusplus} alt="cplusplus" hidden = "true"/>
				
				</div>
			</body>
		)
	}
	
	
}

export default twinroute