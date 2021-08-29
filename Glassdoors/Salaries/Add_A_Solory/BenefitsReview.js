const starEls = document.querySelectorAll(".star.rating");
starEls.forEach((star) => {
  star.addEventListener("click", function (e) {
    let starEl = e.currentTarget;
    console.log(starEl.parentNode.dataset.stars + ", " + starEl.dataset.rating);
    starEl.parentNode.setAttribute("data-stars", starEl.dataset.rating);
  });
});
