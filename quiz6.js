
function changeYearColor() {
    const h1Element = document.querySelector('h1');
    setInterval(() => {
      h1Element.style.color = getRandomColor();
    }, 1000);
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  function applyChallengeBackgrounds() {
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
      if (item.textContent.includes('Done')) {
        item.style.backgroundColor = 'green';
      } else if (item.textContent.includes('Ongoing')) {
        item.style.backgroundColor = 'yellow';
      } else if (item.textContent.includes('Coming')) {
        item.style.backgroundColor = 'red';
      }
    });
  }
  
  
  changeYearColor();
  applyChallengeBackgrounds();
  