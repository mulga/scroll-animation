const scroll_elements = document.querySelectorAll(".box");

const elementInViewPort = (element, dividend = 1) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutOfViewport = (element) => {
  const elementTop = element.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

function scrollAnimation() {
  scroll_elements.forEach((element) => {
    if (elementInViewPort(element, 1)) {
      displayScrollElement(element);
    } else if (elementOutOfViewport(element)) {
      hideScrollElement(element);
    }
  });
}

window.addEventListener("scroll", () => {
  scrollAnimation();
});
