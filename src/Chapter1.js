 import React,{Component} from 'react';
 import python from './characters/python.png'
 import teacher from './characters/teacher.png'; 
 import PythonDate from './PythonDate.js';
 import TwinRoute from './twinroute.js';
 import ReactDOM from 'react-dom';
 
 var count = 0;
 var state2 = "none";
 class Chapter1 extends Component{
	constructor(props){
		super(props);
		//this.nextMessage = this.nextMessage.bind(this);
		//this.state = {showComponent2: false };
	}
	
	yesButtonClick(){
		state2 = true;
		var x = "Hey! Its Python, I'm your best friend here at Coding Uni. Let me show you around!"
		document.getElementById("textArea").value = x;
		document.getElementById('yesBtn').hidden = true;
		document.getElementById('noBtn').hidden = true;
		//document.getElementById("textArea").onClick(this.nextMessages);//<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>
		//document.body.addEventListener('click', function(){this.props.nextMessage();}); 
		
	}
	
	noButtonClick(){
		state2 = true;
		var x = "Hey! Its Python, remember me? I'm so happy your back to love me again!"
		document.getElementById("textArea").value = x;
		document.getElementById('yesBtn').hidden = true;
		document.getElementById('noBtn').hidden = true;
		//document.body.addEventListener('click',event => {this.nextMessage()}); 
	}
	
	nextMessage(){
		if(state2 == true){
			document.getElementById('yesBtn').hidden = true;
			document.getElementById('noBtn').hidden = true;
			if (count == 0){
				var x = "This is homeroom. Our teacher is Mr. Plankalkül. He will be here when class starts."
				document.getElementById("textArea").value = x;
				count++;
			}
			else if(count == 1){
				var x = "Oh, I think that's him right there. Quick, sit in your seat. It's right next to mine. ;)"
				document.getElementById("textArea").value = x;
				count++;
			}
			else if(count==2){
				document.getElementById("Python").src = teacher;
				var x = "Welcome class to Human Studies 101."
				document.getElementById("textArea").value = x;
				count++;
				//alert(document.getElementById("Python").src)
			}
			else if(count ==3){
				var x = "Today we will start with a quick introduction and then be sure to stick around, I will have an announcement at the end."
				document.getElementById("textArea").value = x;
				count++;
			}
			else if(count ==4){
				document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
				var x = "After lecture..."
				document.getElementById("textArea").value = x
				document.getElementById("Python").hidden = true;
				count++;
			}
			else if(count == 5){
				document.body.style.backgroundImage = "url('https://www.wallpaperup.com/uploads/wallpapers/2013/04/14/75592/abed3f403850d8a60fc6145ef453de49.jpg')";
				document.getElementById("Python").hidden = false;
				var x = "We will be getting into teams for our first project. You all will be designing a scale-model of the human body. Instructions and details are posted online."
				document.getElementById("textArea").value = x;
				count++;
			}
			else if(count ==6){
				var x = "Your teams are also posted online. So, make sure to look at them and get started soon. You only have a week."
				document.getElementById("textArea").value = x;
				count++;
			}
			else if(count == 7){
				var x = "That is the end of class. See y'all on Wednesday."
				document.getElementById("textArea").value = x;
				count++;
			}
			else if(count ==8){
				document.getElementById("Python").src = python;
				var x = "Hey babe! SO like I was wondering if you want to hang out after class?"
				document.getElementById("textArea").value = x;
				count++;
			}
			else if (count == 9){
				document.getElementById("textArea").hidden = true;
				document.getElementById("datePython").hidden = false;
				document.getElementById("dontDatePython").hidden = false;
			}
			
		}
	}
	datePython(){
		const element1 = (
			<PythonDate/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	
	dontDatePython(){
		const element1 = (
			<TwinRoute/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	
	render(){
		return(
			<body>
				
				<textarea id = 'textArea' rows = '4' cols= '50' onClick= {this.nextMessage}>Welcome to Coding University. Is it your first time here?</textarea>
				<button type="button"id = "yesBtn" onClick={this.yesButtonClick}>Yes</button>
				<button type="button"id = "noBtn" onClick={this.noButtonClick}>No</button>
				<button type="button"id = "datePython" onClick={this.datePython} hidden = "true">Go on date</button>
				<button type="button"id = "dontDatePython" onClick={this.dontDatePython} hidden = "true">I have homework...</button>
				<div class = "bottomleft">
				<img id = "Python"src= {python} alt="Python"/>
				
				</div>
			</body>
			
		);
	 }
}

export default Chapter1