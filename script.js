document.getElementById("playerSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("playerInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://www.balldontlie.io/api/v1/players/?search=" + value;
    console.log(url);
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    let results = "";
for (let i = 0; i < json.data.length; i++){
    results += "<h1>" + json.data[i].first_name + " " + json.data[i].last_name + "</h1><br>";
    results += "<h3>Position: " + json.data[i].position + "</h3><br>";
    if (json.data[i].height_feet == null){
      results += "<h3>Height: N/A </h3>";
    }
    else {
      results += "<h3>Height: " + json.data[i].height_feet + "'" + json.data[i].height_inches + "</h3>";
    }
    if  (json.data[i].weight_pounds == null){
    results += "<br><h3>Weight: N/A</h3>";
  }
  else {
    results += "<br><h3>Weight: " + json.data[i].weight_pounds + "</h3>";
  }
    results += "<br><h3>Team: " + json.data[i].team.abbreviation + " - " + json.data[i].team.full_name + "</h3>";
    results += "<br><h3>Conference: " + json.data[i].team.conference + "</h3><br>";
}
document.getElementById("player1Results").innerHTML = results;

});
});
