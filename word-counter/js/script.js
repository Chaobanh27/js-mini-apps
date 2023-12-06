const inputEl = document.querySelector('textarea')
const words = document.querySelector('#words')
const characters = document.querySelector('#characters')
const sentences = document.querySelector('#sentences')
const paragraphs = document.querySelector('#paragraphs')

inputEl.addEventListener('change',(e) => {
    const inputVal = e.target.value
    const wordArr = inputVal.split(' ').filter((items) => items !== "") 
    const sentenceArr = inputVal.split(/[.?!]/g).filter(Boolean)
    const paragraphArr = inputVal.split('\n').filter(p => p.trim() !== '')

    words.innerHTML = wordArr.length + ' ' + 'words'
    characters.innerHTML = inputVal.length + ' ' + 'characters'
    sentences.innerHTML = sentenceArr.length + ' ' +  'sentences'
    paragraphs.innerHTML = paragraphArr.length + ' ' + 'paragraphs'

    console.log('words: ' + wordArr.length)
    console.log('characters: ' + inputVal.length)
    console.log('sentences: ' + sentenceArr.length)
    console.log('paragraph: ' + paragraphArr.length)
})