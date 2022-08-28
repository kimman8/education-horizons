import "./App.css";

const App = () => {
  const rgbColours = generateColours();
  // 32 x 32 x 32 = 32,768

  function colourSteps(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
      if (i !== 0 && i % 8 === 0) {
        arr.push(i);
      }
    }
    return arr;
  }

  function generateColours() {
    const red = colourSteps(8, 256);
    const green = colourSteps(8, 256);
    const blue = colourSteps(8, 256);
    let allColours = [];

    let i = 0;
    while (i < red.length) {
      const redRandomIndex = Math.floor(Math.random() * red.length);
      const redValue = red[redRandomIndex];
      red.splice(redRandomIndex, 0);
      console.log({ red });
      i++;

      let j = 0;
      while (j < blue.length) {
        const blueRandomIndex = Math.floor(Math.random() * blue.length);
        const blueValue = blue[blueRandomIndex];
        blue.splice(blueRandomIndex, 0);
        j++;

        let k = 0;
        while (k < green.length) {
          const greenRandomIndex = Math.floor(Math.random() * green.length);
          const greenValue = green[greenRandomIndex];
          green.splice(greenRandomIndex, 0);
          const rgb = `rgb(${redValue},${greenValue},${blueValue})`;
          allColours.push(rgb);
          k++;
        }
      }
    }
    console.log("Total color qty: " + allColours.length);

    return mixColours(allColours);
  }

  function mixColours(coloursArray) {
    let currentIndex = coloursArray.length,
      randomIndex;

    // While there remain elements to mix
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Swap it with the current element
      [coloursArray[currentIndex], coloursArray[randomIndex]] = [
        coloursArray[randomIndex],
        coloursArray[currentIndex],
      ];
    }

    return coloursArray;
  }
  return (
    <div className="container">
      {rgbColours.map((colour, index) => (
        <div
          key={index}
          style={{ backgroundColor: colour }}
          className="square"
        ></div>
      ))}
    </div>
  );
};

export default App;
