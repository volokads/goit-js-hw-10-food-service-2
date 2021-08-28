import refs from './refs.js'
const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
}
const theme = localStorage.getItem("theme")
if (theme === "dark-theme") {
    refs.body.classList.add("dark-theme")
    refs.input.checked = true
}
refs.input.addEventListener('change', changeTheme )

function changeTheme() {if (refs.input.checked) {
        changeClass()
        changeLocaleStorage(Theme.DARK);
    }
    else {
        changeClass()
        changeLocaleStorage(Theme.LIGHT);
}}  
const changeLocaleStorage = (theme) => {
    localStorage.setItem("theme", theme)
}
const changeClass = () => {
    refs.body.classList.toggle("dark-theme")
    refs.body.classList.toggle("light-theme")
}
