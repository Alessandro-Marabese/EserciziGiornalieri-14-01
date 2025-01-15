const allCards = document.getElementsByClassName("card");

function deleteCard() {
  Array.from(allCards).forEach((element) => {
    if (element.style.display !== "none") {
      element.style.display = "none";
    }
  });
}
//deleteCard();
