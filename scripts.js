const stats = document.querySelectorAll(".stat-container");

for (const stat of stats) {
  const increase = stat.querySelector(".fa-square-plus");
  const decrease = stat.querySelector(".fa-square-minus");
  const statLevel = stat.querySelector(".stat-level");

  increase.addEventListener("click", () => {
    let currentLevel = parseInt(statLevel.textContent);

    statLevel.textContent = currentLevel + 1;
  });

  decrease.addEventListener("click", () => {
    let currentLevel = parseInt(statLevel.textContent);

    if (statLevel.textContent > 0) {
      statLevel.textContent = currentLevel - 1;
    }
  });
}
