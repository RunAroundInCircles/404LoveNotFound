import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import python from './characters/python.png';
import './python.css';
import park from'./characters/park.jpg';
import DatePython from './DatePython.js';
import DontDatePython from './DontDatePython.js';

var count = 0;
class PythonDate extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/19/194764_anime-park-background.jpg')";
		//document.getElementByClassName("body")[0].style.backgroundImage = "url(http://www.graciaviva.cat/png/big/19/194755_anime-park-background.jpg)";
		//var back = document.getElementById("body");
		//back.style.backgroundImage = "http://www.graciaviva.cat/png/big/19/194755_anime-park-background.jpg"
		if(count == 0){
			var x = "Im so glad you made it! You look really pretty today."
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		if (count == 1){
			var x = "Lets walk around. *Your heart is racing, Programs don't hang out with humans very often.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 1){
			var x = "*You and Python walk around the park as the sun sets.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 2){
			var x = "I'm having a really good time with you tonight, even if you are a human ;P ";
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 3){
			var x = "You really are amazing.";
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 4){
			var x = "Would you like to date me?"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 5){
			document.getElementById("textArea2").hidden = true;
			document.getElementById("boyfriend").hidden = false;
			document.getElementById("noboyfriend").hidden = false;
		}
	}
	
	datePython(){
		const element1 = (
			<DatePython/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	dontDatePython(){
		const element1 = (
			<DontDatePython/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	
	render(){
		return(
			<body>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*You meet up with Python after school.*</textarea>
				<button type="button"id = "boyfriend" onClick={this.datePython} hidden = "true">Of course Python-Senpai!</button>
				<button type="button"id = "noboyfriend" onClick={this.dontDatePython} hidden = "true">I don't really like you that way...</button>
				<div class="bottomleft">
				<img id = "Python"src= {python} alt="Python"/>
				
				</div>
			</body>
		)
	}
	
	
}

export default PythonDate