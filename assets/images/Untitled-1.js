// api url
const api_url =
	"https://tradestie.com/api/v1/apps/reddit";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>no_of_comments</th>
		<th>sentiment</th>
		<th>sentiment_score</th>
		<th>ticker</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
	<td>${r.no_of_comments} </td>
	<td>${r.sentiment}</td>
	<td>${r.sentiment_score}</td>
	<td>${r.ticker}</td>		
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("companies").innerHTML = tab;
}
