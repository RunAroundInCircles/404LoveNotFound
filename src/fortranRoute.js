import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AskHerOut from './AskHerOut.js';
import GetToKnowHer from './GetToKnowHer.js';
import Fortran from './characters/Fortran.png'
import './python.css';


var count = 0;
class twinroute extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		
		if(count == 0){
			var x = "*You walk over to the three other people that are in the class who are clearly your group members*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			document.getElementById("fortran").hidden = false;
			var x = "However, when you walk closer your eyes catch on a beautiful figure standing in the group."
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 2){
			var x = "*As you walk up, everyone greets you, but you stay silent as you gaze upon the beautiful girl.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 3){
			
		var x = "Hey, I am Fortran *She spoke and you could feel your heart flutter.*";
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 4){
			var x = "*She smiles and you almost had a heart attack right there.*";
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 5){

			var x = "*You try to stay focused but your eyes keep going back to Fortran*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 6){
			var x = "*After the meeting you walk to her and ask for her number. She blushes and gives it to you.* Call me any time. *Oh no, your heart can't take this.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 7){
			var x = "*You both pack up to leave, albiet a little awkwardly. But you want to ask her out now, you can't wait any longer!*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 8){
			
			document.getElementById("textArea2").hidden = true;
			document.getElementById("ask").hidden = false;
			document.getElementById("dontask").hidden = false;
		}
	}
	
	ask(){
		const element1 = (
			<AskHerOut/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	dontask(){
		document.body.style.backgroundImage = "url('https://www.episodeinteractive.com/dcon/pv1_back_INT__FANCY_APARTMENT_BEDROOM___NIGHT.jpg')";
		document.getElementById('root')
		const element1 = (
			<GetToKnowHer/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	
	render(){
		return(
			<body>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*You enter class the next day to find your group for the project*</textarea>
				<button type="button"id = "ask" onClick={this.ask} hidden = "true">Ask her out!</button>
				<button type="button"id = "dontask" onClick={this.dontask} hidden = "true">Wait to get to know her.</button>
				<div class="bottomleft">
				<img id = "fortran"src= {Fortran} alt="fortran" hidden ="true"/>
				
				</div>
			</body>
		)
	}
	
	
}

export default twinroute