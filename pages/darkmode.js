let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.querySelector('#theme-switch')

const eneableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')

}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', 'inactive')
}

if (darkmode === 'active') {
    eneableDarkmode()
}


themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')

    darkmode !== 'active' ? eneableDarkmode() : disableDarkmode()
})

// loading animation code start before the page is loaded
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    const progressBar =
        document.querySelector(".progress-bar");

    const percentage =
        document.querySelector(".percentage");

    let progress = 0;

    const interval = setInterval(() => {

        progress += 5;

        progressBar.style.width =
            `${progress}%`;

        percentage.textContent =
            `${progress}%`;

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                loader.classList.add("hide");

            }, 300);

        }

    }, 80);

});