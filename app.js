class UI {
  constructor() {
    this.buttonClickHandler();
    this.toggleNav();
  }

  buttonClickHandler() {
    const buttons = document.querySelectorAll(".buttons");

    buttons.forEach((button) => {
      button.addEventListener("click", this.buttonClick.bind(this));
    });
  }

  buttonClick(event) {
    const buttonClicked = event.target.parentElement.classList.contains("next")
      ? "next"
      : "previous";
    const currentImage = document.querySelectorAll(".show")[0];
    const nextImage = currentImage[buttonClicked + "ElementSibling"];

    const currentText = document.querySelectorAll(".show")[1];
    const nextText = currentText[buttonClicked + "ElementSibling"];

    if (nextImage && nextImage.classList.contains("carouselImage")) {
      this.contentToAppear(currentImage, nextImage);
    }
    if (nextText && nextText.classList.contains("marketingText")) {
      this.contentToAppear(currentText, nextText);
    }
  }

  contentToAppear(parent, content) {
    parent.classList.add("hide");
    parent.classList.remove("show");
    content.classList.add("show");
    content.classList.remove("hide");
  }

  toggleNav() {
    const hamburgers = document.querySelectorAll(".hamburger");
    const nav = document.querySelector("nav");
    const overlay = document.querySelector(".blackOverlay");

    hamburgers.forEach((hamburger) => {
      hamburger.addEventListener("click", () => {
        nav.classList.toggle("showNav");
        overlay.classList.toggle("active");
      });
    });
  }
}

new UI();
