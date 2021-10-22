document.getElementById("new-quote").addEventListener("click", getQuote);

function getQuote() {
  fetch("https://animechan.vercel.app/api/random")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.anime)
                document.getElementById('author').innerText = data.character;
                document.getElementById("text").innerHTML = data.quote;
                document.getElementById("anime").innerHTML = data.anime;
            });
}
