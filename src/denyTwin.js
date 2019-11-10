import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import FortranRoute from './fortranRoute.js'

var count = 0;
class DenyTwin extends Component{
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
			document.getElementById("textArea5").hidden = true;
			document.getElementById("sleep").hidden = false;
		}
	}
	
	sleep(){
		//document.body.style.backgroundImage = "url('https://www.wallpaperup.com/uploads/wallpapers/2013/04/14/75592/abed3f403850d8a60fc6145ef453de49.jpg')";
		document.body.style.backgroundImage = "url('https://www.wallpaperup.com/uploads/wallpapers/2013/04/14/75592/abed3f403850d8a60fc6145ef453de49.jpg')";
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
			<body>
				<textarea id = 'textArea5' rows = '4' cols= '50' onClick= {this.nextMessage}>*You walked away, starting to feel tired of all these boys chasing you.*</textarea>
				<button type="button"id = "sleep" onClick={this.sleep} hidden = "true">Go to sleep.</button>
			</body>
		)
	}
	
	
}

export default DenyTwin