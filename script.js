document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;

  window.addEventListener("wheel", function (event) {
    if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    } else if (event.deltaY < 0 && currentSectionIndex > 0) {
      currentSectionIndex--;
    }

    scrollToSection(currentSectionIndex);
  });

  function scrollToSection(index) {
    sections[index].scrollIntoView({
      behavior: "smooth",
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;
  window.addEventListener("keydown", function (event) {
    if (
      event.key === "ArrowDown" &&
      currentSectionIndex < sections.length - 1
    ) {
      currentSectionIndex++;
    } else if (event.key === "ArrowUp" && currentSectionIndex > 0) {
      currentSectionIndex--;
    }

    scrollToSection(currentSectionIndex);
  });

  function scrollToSection(index) {
    sections[index].scrollIntoView({
      behavior: "smooth",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let startY = 0;
  let endY = 0;
  let currentSectionIndex = 0;

  window.addEventListener("touchstart", function (event) {
    startY = event.touches[0].clientY;
  });

  window.addEventListener("touchend", function (event) {
    endY = event.changedTouches[0].clientY;
    handleSwipe();
  });

  function handleSwipe() {
    const deltaY = endY - startY;
    if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    } else if (deltaY < 0 && currentSectionIndex > 0) {
      currentSectionIndex--;
    }
    scrollToSection(currentSectionIndex);
  }

  function scrollToSection(index) {
    sections[index].scrollIntoView({
      behavior: "smooth",
    });
  }
});
