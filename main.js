document.querySelector('button').addEventListener('click', getfn)
function getfn() {
    let input = document.querySelector('input').value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    .then(res => res.json())
    .then(data => {
     console.log(data)
    document.querySelector('.word').innerText = `${input}`
    document.querySelector('.partOfSpeech').innerText = (data[0].meanings[0].partOfSpeech).toLowerCase()
    document.querySelector('.transcription').innerText = data[0].phonetic
    document.querySelector('.one').innerText = data[0].meanings[0].definitions[0].definition
    document.querySelector('.two').innerText = data[0].meanings[1].definitions[0].definition
   })
}

