import Dexie from 'dexie';
var friendsInfo = {
	friends: [
		{name: "C", affection: 1, timeSeen: 0},
		{name: "C++", affection: 1, timeSeen: 0},
		{name: "Python", affection: 1, timeSeen: 0},
		{name: "Java", affection: 1, timeSeen: 0},
		{name: "Fortran", affection: 1, timeSeen: 0},
		{name: "Plankalkül", affection: 1, timeSeen: 0}
	]
};
class Database {	

	constructor(){
		
		this.db = new Dexie("friend_database");
		
		this.db.version(1).stores({
			friends: 'name,affection, timeSeen',
			player: 'energy'
		});
		
		this.db.on("populate", this.populateData.bind(this));
		
		this.db.open().catch(function (e) {
			alert("Db Failed to open....whoops");
		});
	}
	
	populateData(){	
		for(var i = 0;i < friendsInfo.friends.length; i++){
			var friend = friendsInfo.friends[i];
			this.db.friends.put(friend);
		}			
	}
}

export default Database