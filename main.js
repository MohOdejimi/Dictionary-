document.querySelector('.search').addEventListener('click', getfn)
const sound = document.querySelector('#sound')
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
    sound.setAttribute("src", data[0].phonetics[0].audio)
    let meanings;
       data.forEach(obj => {
      meanings = Object.entries(obj.meanings)
    })
    /*meanings.forEach(meaning => Object.entries(meaning.definition))*/
    console.log(meanings.forEach(meaning => Object.entries(meaning)))
   })
   .catch(err => {
     document.querySelector('.example').innerText = `You can try the search again at later time or head to the web instead.`
     document.querySelector('.definition').innerText = `Sorry pal, we couldn't find definitions for the word you were looking for`
   })
   
}
function playSound() {
  sound.play();
}