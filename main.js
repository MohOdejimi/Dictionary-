document.querySelector('.search').addEventListener('click', getfn)
const sound = document.querySelector('#sound')
sound.addEventListener('click', playSound)
function getfn() {
    let input = document.querySelector('.text').value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    .then(res => res.json())
    .then(data => {
     console.log(data)
    document.querySelector('.word h3').innerText = `${input}`
    document.querySelector('.partOfSpeech').innerText = (data[0].meanings[0].partOfSpeech).toLowerCase()
    document.querySelector('.transcription').innerText = data[0].phonetic
    document.querySelector('.definition').innerText = data[0].meanings[0].definitions[0].definition
    document.querySelector('.example').innerText = data[0].meanings[0].definitions[0].example
    sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
    console.log(sound)
   })
}
function playSound() {
  sound.play();
}