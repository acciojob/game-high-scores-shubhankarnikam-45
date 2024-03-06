// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

let itemList = JSON.parse(localStorage.getItem("allEntries"));


//content for table.

console.log("top")
// Save score to Local Storage
function saveScore() {
  // complete the code here

	let itemList = JSON.parse(localStorage.getItem("allEntries"));
	
	//current name and score.
	let currNameAndScore = {
		"name":nameInput.value,
		"score":scoreInput.value
	}

	
	if(itemList === null)
	{
		//for very firsttime.
		let array = [];
		array.push(currNameAndScore);
		localStorage.setItem("allEntries",JSON.stringify(array));
		itemList = array;
	}
	else
	{
		console.log("second time")
		itemList.push(currNameAndScore);
		localStorage.setItem("allEntries",JSON.stringify(itemList));
	}

	//make again blank input.
	nameInput.value ="";
	scoreInput.value = "";
	
	showScores();
}

// Show scores in div
function showScores() {

	console.log("innnre");
	scores.innerHTML ="";

	let itemList = JSON.parse(localStorage.getItem("allEntries"));
	if(itemList  === null)
	{
		//this means no score add yet.
		console.log("s")
		let h2Heading = document.createElement("h2");
		h2Heading.innerText = "No scores yet";
		scores.appendChild(h2Heading);
	}
	else
	{
		
		let table = document.createElement("table");	
		let th1 = document.createElement("th");	
		let th2 = document.createElement("th");	
		th1.innerText = "Name";
		th2.innerText = "Score";
		table.appendChild(th1);
		table.appendChild(th2);
		console.log("itemlist",itemList)
		//we using map to iterate over the name and score.
		itemList.forEach((item)=>{
			let tr = document.createElement("tr");	
			let tc1 = document.createElement("th");
			tc1.innerText = item.name;
			let tc2 = document.createElement("th");
			tc2.innerText = item.score;
			tr.appendChild(tc1);
			tr.appendChild(tc2);
			table.appendChild(tr)
		// 	//craete the row.
			console.log("item",item)
		})
		
		scores.appendChild(table);
	}
	
}
