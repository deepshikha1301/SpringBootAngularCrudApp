function addRow(){
	var itemTable = document.getElementById("itemTable");
	if(itemTable.style.visibility == "hidden"){
		itemTable.style.visibility = "visible";
		var row = itemTable.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		cell1.innerHTML = "get groceries";
		cell2.innerHTML = "done";
	}else{
		
	}
}