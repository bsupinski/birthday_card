const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const randomHSL = () =>
  `hsl(${randomBetween(0, 360)}, 
  ${randomBetween(0, 100)}%, 
  ${randomBetween(0, 100)}%)`;

const fillColor = (element, color) => element.setAttribute("fill", color);

const randomBalloonColor = function (element1, element2) {
  const color = colors[randomBetween(0, colors.length)];
  fillColor(element1, color[0]);
  fillColor(element2, color[1]);
};

const createBalloon = () => {
  const balloon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  balloon.classList.add("balloon");
  balloon.setAttribute("viewBox", "0 0 97 218.02");

  const balloonString = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  balloonString.classList.add("balloon__string");
  balloonString.setAttribute(
    "d",
    "M50.2,119.5c-0.2,10-2.3,17-1.7,24.3c0.7,9.9,1.5,10.7-5.2,18.4c-6.4,10.4,19.4,6.5,9.1,24.2, c-5.9,6.4-7.3,10.4-3.2,18.6c1.5,3,2.3,6.2,2.4,9.5l0.1,3.5"
  );

  const balloonMain = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  balloonMain.setAttribute(
    "d",
    "M97,59.5c0,29.86-17.93,54.59-41.31,58.85l-1.69,13.65-4-1-4,1s-1.93,0-2-13.26c-.07,0-.14-.01-.21-.02C19.21,115.82,0,90.41,0,59.5,0,26.64,21.71,0,48.5,0s48.5,26.64,48.5,59.5Z"
  );

  const balloonHighlight = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  balloonHighlight.setAttribute(
    "d",
    "M82.13,24.19c6.47,9.29,8.99,18.72,5.64,21.05s-7.7-7.45-17.78-12.6c-12.99-6.64-8.99-18.72-5.64-21.05s11.32,3.31,17.78,12.6Z"
  );

  randomBalloonColor(balloonMain, balloonHighlight);

  balloon.append(balloonString, balloonMain, balloonHighlight);
  balloon.style.right = `${randomBetween(0, 100)}%`;
  return balloon;
};

const addBalloonDOM = () => {
  const balloon = createBalloon();
  body.append(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 5000);
};

const repeatBalloons = () =>
  setInterval(() => {
    addBalloonDOM();
  }, randomBetween(2000, 7000));
