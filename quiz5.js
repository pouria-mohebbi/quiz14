const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];


function generateBeautifulText() {

  const userInput = prompt("Enter a text to beautify:");


  if (!userInput) {
    alert("Please enter a valid text.");
    return;
  }


  let coloredText = '';
  for (let char of userInput) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    coloredText += `<span style="color: ${randomColor};">${char}</span>`;
  }

  
  document.getElementById('word').innerHTML = coloredText;
}

generateBeautifulText();

