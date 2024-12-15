// Create an object with character names as keys and image URLs as values
const characterImages = {
    'Harry-Potter': 'images/harry-potter.jpg',
    'Hermione-Granger': 'images/hermione-granger.jpg',
    'Ron-Weasley': 'images/ron-weasley.jpg',
    'Severus-Snape': 'images/severus-snape.jpg',
    'Draco-Malfoy': 'images/draco-malfoy.jpg',
    'Cedric-Diggory': 'images/cedric-diggory.jpg',
    'Lord-Voldemort': 'images/lord-voldemort.jpg',
    'Bellatrix-Lestrange': 'images/bellatrix-lestrange.jpg'
  };
  
 
  for (const [character, imageUrl] of Object.entries(characterImages)) {
    const imgElement = document.getElementById(character);
    if (imgElement) {
      imgElement.src = imageUrl;
    }
  }
  