import React,{Component} from 'react';
import logo from './404logo.png';
import Chapter1 from './Chapter1';
import soundfile from './music/title-screen.wav';
import Sound from 'react-sound';

class HomeScreen extends Component{
	constructor(props) {
		super(props);
		
		this.state = {showComponent: false };
		this.startGame = this.startGame.bind(this);
		
		//var db = new Database();
		const sound = new Sound('https://beepbox.co/#8n31s0k7l00e03t1vm0a7g0fj07i0r1o3210T1v1L4u3aq1d5f8y1z6C1c0A9F4B0V1Q07e0Pc436E006cT1v3L4u61q1d5f7y0z6C1c0A5F2B6V7Q0530Pf636E0011T1v1L4uc5q1d2fay0z1C0c1A0F0B3V1Q5000Pf800E0111T2v1L4u15q0d1f8y0z1C2w0b4h400000000h4g000000014h000000004h400000000p1AIR_ligtuRpmHrRolT09uCRYBjnWFvCpw0000', null, (error) => {
		if (error) {
			// do something
		}
  
		// play when loaded
		sound.play();
		});
	} 
	componentWillMount(){
		
	}
	startGame(){
		document.getElementById('title').hidden = true;
		document.getElementById('title2').hidden = true;
		document.getElementById('startBtn').hidden = true;
		this.setState({
			showComponent: true,
		});
		
	}
	
	
	render(){
		return (
			<body>
				<Sound
					url={soundfile}
					playStatus={Sound.status.PLAYING}
					onLoading={this.handleSongLoading}
					onPlaying={this.handleSongPlaying}
					onFinishedPlaying={this.handleSongFinishedPlaying}
				/>
			
				<h1 id = "title">404</h1> 
				<h2 id = 'title2'>love not found</h2>
				<div>
					<button type="button"id = "startBtn" onClick={this.startGame}>Start Game</button>
					{this.state.showComponent ?
						<Chapter1 /> : null
					}
				</div>
			</body>

		);
	
	}
}

export default HomeScreen;