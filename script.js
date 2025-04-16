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

  ageParagraph.textContent += ` ${age}`;
}

updateAge();
