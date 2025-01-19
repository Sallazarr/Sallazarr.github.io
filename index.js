const main = document.querySelector('main');
const root = document.querySelector(':root');
const html = document.querySelector('html')

    document.getElementById('switchTheme').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--color-background', '#fff')
        root.style.setProperty('--color-white', '#030207')
        root.style.setProperty('--color-blue', '#10649C')
        root.style.setProperty('--color-hover', '#3e293a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--color-background', '#030207')
        root.style.setProperty('--color-white', '#fff')
        root.style.setProperty('--color-blue', '#1474b4')
        root.style.setProperty('--color-hover', '#3e293a')
        main.dataset.theme = 'dark'   
    }
})

document.getElementById('language').addEventListener('click', function(){
    if(html.dataset.lang === 'ptbr'){
        const theme = document.getElementById('switchTheme')
        theme.innerHTML = 'Change theme light/dark'
        html.dataset.lang = 'en'
    } else {
        const theme = document.getElementById('switchTheme')
        theme.innerHTML = 'Trocar tema claro/escuro'
        html.dataset.lang = 'ptbr'
    }
})