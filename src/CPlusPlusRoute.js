import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import c from './characters/C.png';
import cplusplus from './characters/C++.png';
import soundfile from './music/twins.wav';
import Sound from 'react-sound';

var count = 0;
class CPlusPlusRoute extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580')";
		
		if(count == 0){
			document.getElementById("c").hidden = true;
			document.getElementById("cplusplus").hidden = false;
			var x = "*C++ seems really happy about your answer.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if (count == 1){
			var x = "I'm sorry. I know I should feel bad but I really liked you. "
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 2){
			var x = "*You try hide a smile behind your fist.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 3){
			document.getElementById("c").hidden = true;
			document.getElementById("cplusplus").hidden = true;
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*You both date for the rest of college and graduate.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 4){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*You find a decent job and marry C++ and lead a fairly normal life.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 5){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*It wasn't necessarily an exciting life, but it was a good one.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 6){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "The End. C++'s Good End (Refresh page to play again.)"
			document.getElementById("textArea2").value = x;
		}
	}
	
	render(){
		return(
			<body>
				<Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*As you tell them this, C angerly gets up and stomps out of the cafe*</textarea>
				<div class = "bottomleft">
					<img id = "c"src= {c} alt="c" hidden ="false"/>
					<img id = "cplusplus"src= {cplusplus} alt="cplusplus" hidden = "true"/>
				</div>
			</body>
		)
	}
	
	
}

export default CPlusPlusRoute