import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import Fortran from './characters/Fortran.png';
import soundfile from './music/fortran.wav';
import Sound from 'react-sound';


var count = 0;
class AskHerOut extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		//document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580')";
		document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
		if(count == 0){
			
			var x = "*You never saw her again. Maybe next time don't scare the poor girl.*"
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
				<Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*She is very freightened that you asked her out and ran away.*</textarea>
				
				<div class = "bottomleft">
					<img id = "fortran"src= {Fortran} alt="fortran" hidden ="true"/>
				</div>
			</body>
		)
	}
	
	
}

export default AskHerOut