
const images = document.querySelectorAll('img');


images.forEach((img, index) => {
  if (index % 2 === 0) {
    
    img.style.border = '2px solid blue';
  } else {
    
    img.style.border = '2px dashed red';
  }
});
