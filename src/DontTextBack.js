import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import FortranRoute from './fortranRoute.js'

var count = 0;
class DontTextBack extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		if (count == 0){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*You decide to go to sleep early since you are so tired from being so popular.*"
			document.getElementById("textArea5").value = x;
			count++;
		}
		else if(count ==1){
			document.getElementById("textArea2").hidden = true;
			document.getElementById("sleep").hidden = false;
		}
	}
	
	sleep(){
		//document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
		const element1 = (
			<FortranRoute/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	
	render(){
		return(
			<textarea id = 'textArea5' rows = '4' cols= '50' onClick= {this.nextMessage}>*You look away from your phone frowing.*</textarea>
			<button type="button"id = "sleep" onClick={this.sleep} hidden = "true">Go to sleep.</button>
		)
	}
	
	
}

export default DontTextBack