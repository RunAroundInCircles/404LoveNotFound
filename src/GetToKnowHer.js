import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import Fortran from './characters/Fortran.png';
import DenyHer from './denyHer.js';
import FortranDate from './fortranDate.js'
import soundfile from './music/fortran.wav';
import Sound from 'react-sound';

var count = 0;
class GetToKnowHer extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		//document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580')";
		//document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
		if(count == 0){
			
			var x = "*You were frustrated but at the same time super happy you got her attention all to yourself*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			var x = "*She studies your body in order to make the statue.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if (count == 2){
			var x = "*At the end of the week you start to feel anxious. Will you two talk after the project? You want to keep talking to her.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if (count == 3){
			var x = "*However, you shouldn't have felt worry because at the end of the your presentation (which was horrible since two of your partners knew nothing), she stops you before you could sit down.*"

			document.getElementById("textArea2").value = x;
			count++;
		}
		else if (count == 4){
			var x = "Do you want to go on a date tomorrow?"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 5){
			
			document.getElementById("fortranDate").hidden = false;
			document.getElementById("denyHer").hidden = false;
		}
	}
	fortranDate(){
		document.body.style.backgroundImage = "url('https://www.imgbase.info/images/safe-wallpapers/anime/anime_scenery/56308_anime_scenery_anime_sky_full_of_stars.jpg')";
		const element1 = (
			<FortranDate/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	denyHer(){
		const element1 = (
			<DenyHer/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
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
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*You spend a lot of time with her that week as the other two team members barely help.*</textarea>
				<button type="button"id = "fortranDate" onClick={this.fortranDate} hidden = "true">Say Yes!</button>
				<button type="button"id = "denyHer" onClick={this.denyHer} hidden = "true">Say No...</button>
				<div class = "bottomleft">
					<img id = "fortran"src= {Fortran} alt="fortran" hidden ="true"/>
				</div>
			</body>
		)
	}
	
	
}

export default GetToKnowHer