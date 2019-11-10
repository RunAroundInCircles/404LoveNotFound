import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import TextBack from './textBack.js'


var count = 0;
class AcceptTwin extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		document.body.style.backgroundImage = "url('https://www.episodeinteractive.com/dcon/pv1_back_INT__FANCY_APARTMENT_BEDROOM___NIGHT.jpg')";
		
		if(count == 0){
			var x = "*When you get home later that evening, you receive a text from a random number.*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			var x = "Hey, this is C++, the boy you ran into earlier today. I was wondering if you wanted to go for coffee tomorrow?"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 2){
			var x = "*Oh no. He's a Program. Should I accept? What if he finds out I am a human.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 3){
			document.getElementById("textArea2").hidden = true;
			document.getElementById("textBack").hidden = false;
			document.getElementById("donttext").hidden = false;
		}
	}
	textBack(){
		const element1 = (
			<TextBack/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	dontText(){
	
	}
	
	render(){
		return(
			<body>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*He pulls out his phone and you input your number*</textarea>
				<button type="button"id = "textBack" onClick={this.textBack} hidden = "true">Text Back</button>
				<button type="button"id = "donttext" onClick={this.dontText} hidden = "true">Ignore Text</button>
								
			</body>
		)
	}
	
	
}

export default AcceptTwin