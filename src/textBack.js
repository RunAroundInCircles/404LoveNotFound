import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './python.css';
import CRoute from './CRoute.js';
import CPlusPlusRoute from './CPlusPlusRoute.js';
import TwinRouteGoodEnding from './TwinRouteGoodEnding.js';
import c from './characters/C.png';
import cplusplus from './characters/C++.png';


var count = 0;
class TextBack extends Component{
	constructor(props){
		super(props);
	}
	
	nextMessage(){
		document.body.style.backgroundImage = "url('https://cdna.artstation.com/p/assets/images/images/012/900/714/large/amanda-ejiri-1.jpg?1537104580')";
		
		if(count == 0){
			document.getElementById("c").hidden = false;
			var x = "*You arrive at the coffee shop the next day. You dont see him anywhere, but you do see his brother.*"
			document.getElementById("textArea2").value = x;
			count++;
			
		}
		else if (count == 1){
			var x = "*He waves at you, so you hesitantly approach.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 2){
			var x = "My brother will be back in a second, sit there."
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 3){
			var x = "*You nod and awkwardly sit down.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 4){
			var x = "*After a few minutes in silence the boy across from you huffs.* You don't talk much do you?"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 5){
			var x = "*You nod again and an annoyed look crosses his face.* Well, My name is C. I'm C++'s twin, if you even cared."
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 6){
			var x = "*You smile at him and a blush crosses his face. Both of you talk a little bit as you wait for C++ and you can tell that C isn't a bad guy just a little weary of new people.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 7){
			document.getElementById("c").hidden = true;
			document.getElementById("cplusplus").hidden = false;
			var x = "*You two were so engrossed in each other, you didn't even notice C++ come out of the bathroom until he coughed behind you.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 8){
			var x = "*You blush, knowing he saw you flirting.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 9){
			var x = "I'm glad you guys are getting along. *C++ smiles.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 10){
			document.getElementById("c").hidden = false;
			document.getElementById("cplusplus").hidden = false;
			var x = "*All three of you laugh and talk until you realise hours have passed. When it gets to around the time you have to leave, C++ gets quiet.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 11){
			document.getElementById("c").hidden = true;
			document.getElementById("cplusplus").hidden = false;
			var x = "*You go to say your goodbyes, but C++ stops you with a hand on your shoulder.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 12){
			var x = "Hey, I need to ask you something and it might sound weird."
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 13){
			var x = "*You nod for him to continue.*"
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 14){
			var x = "So.... Which one of us would you date? Me or C."
			document.getElementById("textArea2").value = x;
			count++;
		}
		else if(count == 15){
			document.getElementById("cplusplus").hidden = true;
			document.getElementById("textArea2").hidden = true;
			document.getElementById("onlyC").hidden = false;
			document.getElementById("onlyCplusplus").hidden = false;
			document.getElementById("bothOfThem").hidden = false;
		}
	}
	onlyC(){
		const element1 = (
			<CRoute/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	onlyCplusplus(){
		const element1 = (
			<CPlusPlusRoute/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	bothOfThem(){
		const element1 = (
			<TwinRouteGoodEnding/>
		)
				
		ReactDOM.render(
			element1,
			document.getElementById('root')
		)
	}
	
	render(){
		return(
			<body>
				<textarea id = 'textArea2' rows = '4' cols= '50' onClick= {this.nextMessage}>*You send a text back and you guys decide on a time and place.*</textarea>
				<button type="button"id = "onlyC" onClick={this.onlyC} hidden = "true">Only with C</button>
				<button type="button"id = "onlyCplusplus" onClick={this.bothOfThem} hidden = "true">Neither!</button>
				<button type="button"id = "bothOfThem" onClick={this.onlyCplusplus} hidden = "true">Only with C++</button>
				
				<div class = "bottomleft">
					<img id = "c"src= {c} alt="c" hidden ="true"/>
					<img id = "cplusplus"src= {cplusplus} alt="cplusplus" hidden = "true"/>
				</div>
			</body>
		)
	}
	
	
}

export default TextBack