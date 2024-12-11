const generateBtn = document.querySelector(".generate-btn");
const memeTitle = document.querySelector(".meme-title")
const memeImage = document.querySelector(".meme-image")
const authorOutput = document.querySelector(".author")

function getMeme() {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((res) => res.json())
        .then(data => {
            const { title, url, author } = data;
            authorOutput.innerText = `Meme by: ${author}`;
            memeTitle.innerText = title;
            memeImage.src = url;
        })
}

getMeme();

generateBtn.addEventListener("click", () => {
  getMeme();
})