const refs = {
    input: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body')
}
// console.log(refs.input);
const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
}

// 

const theme = localStorage.getItem("theme")
console.log(theme);
if (theme === "dark-theme") {
    refs.body.classList.add("dark-theme")
    refs.input.checked = true
}
refs.input.addEventListener('change', (e) => {
    console.log(refs.input.checked);
    if (refs.input.checked) {
        refs.body.classList.add("dark-theme")
        refs.body.classList.remove("light-theme")
        localStorage.setItem("theme", Theme.DARK);
    }
    else {
        refs.body.classList.add("light-theme")
        refs.body.classList.remove("dark-theme")
        localStorage.setItem("theme", Theme.LIGHT);
    }
})