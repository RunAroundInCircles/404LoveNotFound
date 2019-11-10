import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import Fortran from './characters/Fortran.png';




var count = 0;
class FortranDate extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		//document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580')";
		
		if(count == 0){
			
			var x = "*And as you sat in that field of flowers gazing into the night, you fell in love.*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "The End. Fortran's Good End (Refresh page to play again.)"
			document.getElementById("textArea2").value = x;
		}
	}
	
	
	render(){
		return(
			<body>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*She takes you to go star gazing that night.*</textarea>
				
				<div class = "bottomleft">
					<img id = "fortran"src= {Fortran} alt="fortran" hidden ="true"/>
				</div>
			</body>
		)
	}
	
	
}

export default FortranDate