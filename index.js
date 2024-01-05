const laughing_emoji = document.getElementById("laugh");
const laughing_audio = new Audio("./assests/laugh.wav")

const evil_laugh_emoji = document.getElementById("evil-laugh");
const evil_laugh_audio = new Audio("./assests/evil-laugh.mp3")

const success_emoji = document.getElementById("success");
const success_audio = new Audio("./assests/success.mp3")

laughing_emoji.addEventListener("click", () => {
    laughing_audio.play()
})

evil_laugh_emoji.addEventListener("click", () => {
    evil_laugh_audio.play()
})

success_emoji.addEventListener("click", () => {
    success_audio.play()
})