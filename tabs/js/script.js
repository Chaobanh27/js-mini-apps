const tabBtns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

tabBtns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        const dataId = e.target.dataset.id
        tabBtns.forEach((target) => [
            target.classList.remove('active')
        ])
        const button = e.target
        button.classList.add('active')

        articles.forEach((article) => {
            article.classList.remove('active')
        })
        const articleId = document.getElementById(dataId)
        articleId.classList.add('active')
    })
})

