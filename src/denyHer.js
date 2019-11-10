import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import Fortran from './characters/Fortran.png';




var count = 0;
class DenyHer extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		//document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580')";
		document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
		if(count == 0){
			
			var x = "*No one would talk to you the rest of your time at Code University to a point where you drop out.*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if(count == 0){
			
			var x = "*You are sad and alone.*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			var x = "The End. Fortran's Bad End (Refresh page to play again.)"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 2){
			
			document.getElementById("textArea2").hidden = true;
			document.getElementById("fortran").hidden = true;
		}
	}
	
	
	render(){
		return(
			<body>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*You denied the prettiest girl in school and every one hates you for it.*</textarea>
				
				<div class = "bottomleft">
					<img id = "fortran"src= {Fortran} alt="fortran" hidden ="true"/>
				</div>
			</body>
		)
	}
	
	
}

export default DenyHer