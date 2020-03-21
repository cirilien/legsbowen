const images = [
  "huaisang1.jpg",
  "huaisang2.jpg",
  "huaisang3.jpg",
  "huaisang4.png",
  "huaisang5.jpg",
  "huaisang6.jpg"
];

function randomFromIamgesArray() {
  return images[Math.floor(Math.random() * images.length)];
}

function randomImgSrc() {
  return "images/" + randomFromIamgesArray();
}

function updateImgSrc() {
  const img = document.querySelector("#directorHuisang");
  img.setAttribute("src", randomImgSrc());
}

updateImgSrc();
