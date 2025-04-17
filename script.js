function updateAge() {
  const ageParagraph = document.getElementById("age");

  const dateOfBirth = new Date(2000, 11, 31);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

  const hasBirthdayPassed =
    currentDate.getMonth() > dateOfBirth.getMonth() ||
    (currentDate.getMonth() === dateOfBirth.getMonth() &&
      currentDate.getDate() >= dateOfBirth.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  ageParagraph.innerHTML += `<b>Age:</b> ${age}`;
}

updateAge();

const img = document.getElementById("img");

img.addEventListener("click", () => {
  const main = document.getElementById("main");

  const fullImgDiv = document.createElement("div");
  main.appendChild(fullImgDiv);
  fullImgDiv.setAttribute("class", "full-img");

  const fullImg = document.createElement("img");
  fullImgDiv.appendChild(fullImg);
  fullImg.setAttribute("src", "img/avatar-img.jpg");
  fullImg.setAttribute("alt", "Full Image");

  fullImgDiv.addEventListener("click", () => {
    fullImgDiv.remove();
  });
});
