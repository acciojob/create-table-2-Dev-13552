function createTable() {
    //Write your code here
	const table = document.querySelector("#myTable")
	let rows = Number(prompt("Input Number of rows"))
		if(isNaN(rows)){
			return;
		}
		if(rows <= 0){
		alert("Enter valid Number")
		return
	}
	let cols = Number(prompt("Input Number of columns"))

	if(isNaN(cols)){
		return;
	}

	if(cols <= 0){
		alert("Enter valid Number")
		return
	}

	for(let i = 0; i < rows; i++){
		let row = document.createElement('tr')
		for(let j = 0; j < cols; j++){
			let col = document.createElement('td')
			col.innerHTML = `Row-${i} Column-${j}`
			row.appendChild(col)
		}
		table.appendChild(row)
	}
}
