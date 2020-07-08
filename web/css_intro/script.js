
function randomiseDogPicture() {
    let imageNumber = Math.floor((Math.random() * 5) + 1);
    document.getElementById("dogImg").src = `../resources/dog_${imageNumber}.jpg`;
}