const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+`1234567890-=[]{}|;':,./<>?";




let interval = null;
let onHeader = true;

document.querySelector("h1").onmouseover = event => {
    onHeader = true;
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {

        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index < iteration && onHeader) {
                return event.target.dataset.value[index];
            }
            if (event.target.dataset.value[index] == " " && onHeader) {
                return " ";
            }

            if (onHeader) {
                return letters[Math.floor(Math.random() * letters.length)];
            }


        }).join("");
        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 35);

}
