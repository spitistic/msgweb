function loadGameTiles() {
games.forEach(game => {
  /*
  <div class="card">
    <img src="img_avatar.png" alt="Avatar" style="width:100%">
    <div class="card-content">
      <h4><b>John Doe</b></h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
  */

  var card = document.createElement("div")
  var content = document.createElement("div")
  var image = document.createElement("img")
  var title = document.createElement("h1")
  var desc = document.createElement("p")

  card.classList.add("card");
  image.src = game.image || "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg" // placeholder image
  image.style = "width: 100%"
  image.alt = "Game image"
  content.classList.add("card-content");
  title.innerHTML = game.title
  desc.innerHTML = game.description
  image.classList.add("game-image")
  content.appendChild(title)
  card.appendChild(image)
  content.appendChild(image)
  content.appendChild(desc)
  card.appendChild(content)
  if (document.getElementById("games") == null) {
    console.log("No games found")
  } else if(window.location.href.includes("games")) {
  _.get("#games").appendChild(card)
  } else {
    console.log("Not on games page")
  }
  _.on(card, "click", () => {
    var url = "msgweb/games/player.html";
  changeurl(url, "Game Player"); 
  getHTML( '../games/player.html', function (response) {
    document.documentElement.innerHTML = response.documentElement.innerHTML;
    console.log(response.documentElement.innerHTML);
    timeSet();
    loadGameData();
  });
    localStorage.setItem("game-background", image.src);
    localStorage.setItem("game-file", game.file);
    localStorage.setItem("game-title", game.title);
    localStorage.setItem("game-description", game.description);
  })
  
  
})

}
loadGameTiles();