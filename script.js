const images = [
  "bowen1.JPG",
  "bowen2.JPG",
  "bowen3.JPG",
  "bowen4.JPG",
  "bowen5.JPG",
  "bowen7.JPG",
  "bowen8.JPG",
  "bowen9.JPG",
  "bowen10.JPG",
  "bowen11.JPG",
  "bowen12.JPG",
  "bowen13.JPG",
  "bowen14.JPG",
  "bowen15.JPG",
  "bowen16.JPG",
  "bowen17.JPG",
  "bowen18.JPG",
  "bowen19.JPG",
  "bowen20.JPG",
  "bowen21.JPG",
  "bowen22.JPG",
  "bowen23.JPG",
  "bowen24.JPG",
  "bowen25.JPG",
  "bowen26.JPG",
  "bowen27.JPG",
  "bowen28.JPG",
  "bowen29.JPG",
  "bowen30.JPG",
  "bowen31.JPG",
  "bowen32.JPG",
  "bowen33.JPG",
  "bowen34.JPG",
  "bowen35.JPG",
  "bowen36.JPG",
  "bowen37.JPG",
  "bowen38.JPG",
  "bowen39.JPG",
  "bowen40.JPG",
  "bowen41.JPG",
  "bowen42.JPG",
  "bowen43.JPG",
  "bowen44.JPG",
  "bowen45.JPG",
  "bowen46.JPG"
];

function randomFromIamgesArray() {
  return images[Math.floor(Math.random() * images.length)];
}

function randomImgSrc() {
  return "images/" + randomFromIamgesArray();
}

function updateImgSrc() {
  const imgSrc = randomImgSrc();
  const bg = document.querySelector("#chaos");
  const img = document.querySelector("#legsOfBourne");
  const ogImg = document.querySelector("meta[property='og:image']");
  bg.setAttribute("style", `background-image: url(${imgSrc});`);
  img.setAttribute("src", imgSrc);
  ogImg.setAttribute("content", imgSrc); // i have no idea if this will work YOLO
}

updateImgSrc();
