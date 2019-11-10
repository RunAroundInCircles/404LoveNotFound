import React,{Component} from 'react';
import ReactDOM from 'react-dom';

var count = 0;
class DatePython extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		if (count == 0){
			document.body.style.backgroundImage = "url('http://www.graciaviva.cat/png/big/31/315166_black-desktop-background.jpg')";
			var x = "*You and Python end up dating throughout your time at Coding University.*"
			document.getElementById("textArea3").value = x;
			count++;
		}
		else if(count == 1){
			var x = "*It was hard for you to find a job after college, after all most human biologists weren't human.*"
			document.getElementById("textArea3").value = x;
			count++;
		}
		else if(count == 2){
			var x = "*However, Python became the CEO of a major corporation. The money from this job helped pay your luxury lifestyle.*"
			document.getElementById("textArea3").value = x;
			count++;
		}
		else if(count == 3){
			var x = "*Things aren't always easy, but no matter how hard it got, you both always said the one thing that mattered at the end of the day.*"
			document.getElementById("textArea3").value = x;
			count++;
		}
		else if(count == 4){
			var x = "I love you."
			document.getElementById("textArea3").value = x;
			count++;
		}
		else if(count == 5){
			var x = "The End. (Refresh page to play again.)"
			document.getElementById("textArea3").value = x;
		}
	}
	
	render(){
		return(
			<textarea id = 'textArea3' rows = '4' cols= '50' onClick= {this.nextMessage}>Python: Good Ending!</textarea>
		)
	}
	
	
}

export default DatePython