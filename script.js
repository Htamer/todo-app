const themeButton = document.querySelector(".theme-button")
const themeButtonIcon = document.querySelector(".theme-button>i")
const body = document.querySelector("body")
const lightThemeName = "light"
function toggleTheme() {
    // First we need to see if the light theme is active on the body tag. 
    if (body.classList.contains(lightThemeName)) {
        // We need to remove it if it's there. 
        body.classList.remove(lightThemeName)        
        themeButtonIcon.classList.remove("fa-moon")
        themeButtonIcon.classList.add("fa-sun")
    } else {
        // Otherwise, add it. 
        body.classList.add(lightThemeName)
        themeButtonIcon.classList.remove("fa-sun")
        themeButtonIcon.classList.add("fa-moon")    
    }   
}
themeButton.addEventListener("click", () => {
    toggleTheme()
} )