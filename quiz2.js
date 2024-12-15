
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);


const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');
console.log(para1, para2, para3, para4);


const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);


allParagraphs.forEach((paragraph, index) => {
  console.log(`Paragraph ${index + 1}: ${paragraph.textContent}`);
});


para4.textContent = 'This is the new content for paragraph 4.';
console.log(para4.textContent);


allParagraphs.forEach((paragraph, index) => {
  paragraph.id = `paragraph${index + 1}`;
  paragraph.classList.add(`paragraph-style-${index + 1}`);
});
console.log(allParagraphs);


  paragraph.style.color = 'blue';
  paragraph.style.backgroundColor = 'lightgray';
  paragraph.style.border = '1px solid black';
  paragraph.style.fontSize = '16px';
  paragraph.style.fontFamily = 'Arial, sans-serif';
});
console.log(allParagraphs);


allParagraphs.forEach((paragraph, index) => {
  if (index === 0 || index === 2) {
    paragraph.style.color = 'green';
  } else if (index === 1 || index === 3) {
    paragraph.style.color = 'red';
  }
});
console.log(allParagraphs);
