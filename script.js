const images = [
  "huaisang1.jpg",
  "huaisang2.jpg",
  "huaisang3.jpg",
  "huaisang4.png",
  "huaisang5.jpg",
  "huaisang7.png",
  "huaisang8.jpg",
  "huaisang9.jpg",
  "huaisang10.jpg",
  "huaisang11.jpg",
  "huaisang12.jpg",
  "huaisang13.jpg",
  "huaisang14.jpg",
  "huaisang15.jpg",
  "huaisang16.jpg",
  "huaisang17.jpg",
  "huaisang18.jpg",
  "huaisang19.png",
  "huaisang20.jpg",
  "huaisang21.jpg",
  "huaisang22.jpg",
  "huaisang23.jpg",
  "huaisang24.jpeg",
  "huaisang25.jpeg",
  "huaisang26.jpg",
  "huaisang27.jpg",
  "huaisang28.jpg",
  "huaisang29.jpg"
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
