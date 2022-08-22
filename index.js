const body = document.querySelector("body")


const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min )

const randomRGB = () => `rgb(${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(0, 255)})`

const bgColor = (element, color) => element.style.backgroundColor = color;


const randomBalloonColor = (element1, element2) => {
    const color = randomRGB();
    bgColor(element1, color);
    bgColor(element2, color);
}


const createBalloon = () => {
    const balloonOuter = document.createElement("div");
    balloonOuter.classList.add("test1");
    const balloonInner = document.createElement("div");
    balloonOuter.style.right=`${randomBetween(0, 100)}%`;
    balloonInner.classList.add("test2")
    randomBalloonColor(balloonOuter, balloonInner)
    balloonOuter.appendChild(balloonInner);
    body.appendChild(balloonOuter);

    setTimeout(()=>{
        balloonOuter.remove();
        balloonInner.remove();
    }, 5000)

}

const repeatBalloons = () => setInterval(()=> {
    createBalloon()

},randomBetween(2000, 6000));

repeatBalloons();
repeatBalloons();
repeatBalloons();