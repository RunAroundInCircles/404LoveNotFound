import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import c from './characters/C.png';
import cplusplus from './characters/C++.png';

var count = 0;
class TwinRouteGoodEnding extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580')";
		
		if(count == 0){
			var x = "We understand. We can still be friends right?"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			var x = "*You finish your coffee and plan to meet again soon.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if (count == 2){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*All three of you graduated together and ended up getting hired at the same company.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 3){
			var x = "*You spend your lives laughing and marry good partners.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 4){
			var x = "The End. Twin's Good End (Refresh page to play again.)"
			document.getElementById("textArea2").value = x;
		}
	}
	
	render(){
		return(
			<body>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*They both look disappointed but nod.*</textarea>
				<div class = "bottomleft">
					<img id = "c"src= {c} alt="c" hidden ="true"/>
					<img id = "cplusplus"src= {cplusplus} alt="cplusplus" hidden = "true"/>
				</div>
			</body>
		)
	}
	
	
}

export default TwinRouteGoodEnding