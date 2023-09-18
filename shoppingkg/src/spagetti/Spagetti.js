// Whenever the user explicitly chooses dark mode
export const DarkFun = () => {
    localStorage.theme = 'dark'
    RefreshDarkMode()
}


// Whenever the user explicitly chooses light mode
export const LightFun = () => {
    localStorage.theme = 'light'
    RefreshDarkMode()
}
// 
// 
// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
// 
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
function RefreshDarkMode() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}
RefreshDarkMode()


