import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import soundfile from './music/python.wav';
import Sound from 'react-sound';

var count = 0;
class DontDatePython extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		if (count == 0){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*As you both continue your education, you decide to stay friends.*"
			document.getElementById("textArea4").value = x;
			count++;
		}
		else if(count == 1){
			var x = "*It was hard for you to find a job after college, after all most human biologists weren't human.*"
			document.getElementById("textArea4").value = x;
			count++;
		}
		else if(count == 2){
			var x = "*You end up working at a fast food place down the street from the company Python got accepted to. You see him everyday and wonder why you didn't date him.*"
			document.getElementById("textArea4").value = x;
			count++;
		}
		else if(count == 3){
			var x = "*Days seem to drag on and you wonder if your life would be different if you had just given him the chance.*"
			document.getElementById("textArea4").value = x;
			count++;
		}
		else if(count == 4){
			var x = "The world isn't very fair to your kind."
			document.getElementById("textArea4").value = x;
			count++;
		}
		else if(count == 5){
			var x = "The End. (Refresh page to play again.)"
			document.getElementById("textArea4").value = x;
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
			<textarea id = 'textArea4' rows = '4' cols= '50' onClick= {this.nextMessage}>Python: Bad Ending!</textarea>
			</body>
		)
	}
	
	
}

export default DontDatePython