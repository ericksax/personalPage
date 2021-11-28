
const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/erick-silva-dev/")
}

const openGithub = () => {
    window.open("https://github.com/ericksax")
}

document.querySelector(".linkBtn").addEventListener("click", openLinkedin)
document.querySelector(".gitBtn").addEventListener("click", openGithub)

