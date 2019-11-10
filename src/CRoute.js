import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import c from './characters/C.png';
import cplusplus from './characters/C++.png';
import soundfile from './music/twins.wav';
import Sound from 'react-sound';

var count = 0;
class CRoute extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580')";
		
		if(count == 0){
			document.getElementById("c").hidden = false;
			document.getElementById("cplusplus").hidden = true;
			var x = "*C doesn't know what to do either. He obviously likes you, but can he betray his brother for a significant other?*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			document.getElementById("c").hidden = true;
			document.getElementById("cplusplus").hidden = false;
			var x = "*As the guilt starts to sink in, C++ suddenly perks up.* Of course! My brother is awesome and you will be good together."
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 2){
			var x = "*You both see the tears in his eyes, but you also notice the sincerity.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 3){
			document.getElementById("c").hidden = true;
			document.getElementById("cplusplus").hidden = true;
			var x = "*C++ leaves and an awkward tension is present.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 4){
			document.getElementById("c").hidden = false;
			document.getElementById("cplusplus").hidden = true;
			var x = "*You apologize to C about hurting his brother, but you only have feelings for him.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 5){
			var x = "*C just nods, but you can tell he is a little annoyed.* I mean, it's not like I like you that much or anything...but my brother will understand if we date."
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 6){
			var x = "*You grimace and roll your eyes.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 7){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*Both you and C date throughout your time at Code University.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 8){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*You grow to love eachother very much.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 9){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "C soon found someone who they loved and you went on double dates with them on the weekends.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 10){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "The End. C's Good End (Refresh page to play again.)"
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
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*As you told them this, you see C++'s eyes fall down in sadness.*</textarea>
				<div class = "bottomleft">
					<img id = "c"src= {c} alt="c" hidden ="true"/>
					<img id = "cplusplus"src= {cplusplus} alt="cplusplus" hidden = "true"/>
				</div>
			</body>
		)
	}
	
	
}

export default CRoute