const startingClasses = {
  hero: {
    level: 7,
    vigor: 14,
    mind: 9,
    endurance: 12,
    strength: 16,
    dexterity: 9,
    intelligence: 7,
    faith: 8,
    arcane: 11,
  },
  bandit: {
    level: 5,
    vigor: 10,
    mind: 11,
    endurance: 10,
    strength: 9,
    dexterity: 13,
    intelligence: 9,
    faith: 8,
    arcane: 14,
  },
  astrologer: {
    level: 6,
    vigor: 9,
    mind: 15,
    endurance: 9,
    strength: 8,
    dexterity: 12,
    intelligence: 16,
    faith: 7,
    arcane: 9,
  },
  warrior: {
    level: 8,
    vigor: 11,
    mind: 12,
    endurance: 11,
    strength: 10,
    dexterity: 16,
    intelligence: 10,
    faith: 8,
    arcane: 9,
  },
  prisoner: {
    level: 9,
    vigor: 11,
    mind: 12,
    endurance: 11,
    strength: 11,
    dexterity: 14,
    intelligence: 14,
    faith: 6,
    arcane: 9,
  },
  confessor: {
    level: 10,
    vigor: 10,
    mind: 13,
    endurance: 10,
    strength: 12,
    dexterity: 12,
    intelligence: 9,
    faith: 14,
    arcane: 9,
  },
  vagabond: {
    level: 9,
    vigor: 15,
    mind: 10,
    endurance: 11,
    strength: 14,
    dexterity: 13,
    intelligence: 9,
    faith: 9,
    arcane: 7,
  },
  prophet: {
    level: 7,
    vigor: 10,
    mind: 14,
    endurance: 8,
    strength: 11,
    dexterity: 10,
    intelligence: 7,
    faith: 16,
    arcane: 10,
  },
  samurai: {
    level: 9,
    vigor: 12,
    mind: 11,
    endurance: 13,
    strength: 12,
    dexterity: 15,
    intelligence: 9,
    faith: 8,
    arcane: 8,
  },
  wretch: {
    level: 1,
    vigor: 10,
    mind: 10,
    endurance: 10,
    strength: 10,
    dexterity: 10,
    intelligence: 10,
    faith: 10,
    arcane: 10,
  },
};

let addedStats = {
  vigor: 0,
  mind: 0,
  endurance: 0,
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  faith: 0,
  arcane: 0,
};

const startingClassSelector = document.querySelector(
  ".starting-class-selector",
);
const startingClassList = document.querySelector(".starting-class-list");
const classOptions = document.querySelectorAll(".starting-class-option");
const defaultSelectedOption = startingClassList.firstElementChild;
const stats = document.querySelectorAll(".stat-container");
let selectedOption;

const summaryClass = document.querySelector('[data-summary="class"]');
const summaryLevel = document.querySelector('[data-summary="level"]');
const summaryRunesNeeded = document.querySelector(
  '[data-summary="runes-needed"]',
);
const summaryBuildType = document.querySelector('[data-summary="build-type"]');
const summaryHP = document.querySelector('[data-sumary="hp"]');
const summaryFP = document.querySelector('[data-summary="fp"]');
const summaryMainWeapon = document.querySelector(
  '[data-summary="main-weapon"]',
);
const summaryEquipLoad = document.querySelector('[data-summary="equip-load"]');

startingClassSelector.addEventListener("click", () => {
  startingClassSelector.classList.toggle("active");
});

const getSelectedClass = () => {
  return startingClasses[selectedOption.dataset.classOption];
};

const optionIsSelected = () => {
  return [...classOptions].find((option) => {
    return option.classList.contains("selected");
  });
};

const checkForSelectedOption = () => {
  if (!optionIsSelected()) {
    selectedOption = defaultSelectedOption;
    selectedOption.classList.add("selected");
  } else {
    selectedOption = optionIsSelected();
  }
};

const resetStats = () => {
  for (const stat of stats) {
    const statLevel = stat.querySelector(".stat-level");
    const statName = stat.dataset.stat;
    const base = getSelectedClass();
    statLevel.textContent = base[statName];
    addedStats[statName] = 0;
  }
};

const updateSummary = () => {
  let level = 0;
  const baseLevel = getSelectedClass().level;

  for (const stat in addedStats) {
    level += addedStats[stat];
  }

  summaryLevel.textContent = baseLevel + level;
};

const renderStats = () => {
  const base = getSelectedClass();

  for (const stat of stats) {
    const statLevel = stat.querySelector(".stat-level");
    const statName = stat.dataset.stat;

    statLevel.textContent = base[statName] + addedStats[statName];
  }
};

checkForSelectedOption();
resetStats();
updateSummary();

for (const option of classOptions) {
  option.addEventListener("click", (event) => {
    if (option !== selectedOption) {
      selectedOption.classList.remove("selected");
      selectedOption = option;
      selectedOption.classList.add("selected");
      startingClassList.insertBefore(
        selectedOption,
        startingClassList.firstElementChild,
      );
      startingClassSelector.classList.remove("active");
      resetStats();
      updateSummary();
      event.stopPropagation();
    }
  });
}

for (const stat of stats) {
  const increase = stat.querySelector(".fa-square-plus");
  const decrease = stat.querySelector(".fa-square-minus");
  const statLevel = stat.querySelector(".stat-level");
  const statName = stat.dataset.stat;

  increase.addEventListener("click", () => {
    addedStats[statName]++;
    renderStats();
    updateSummary();
  });

  decrease.addEventListener("click", () => {
    const minStat = getSelectedClass()[statName];

    if (addedStats[statName] > 0) {
      addedStats[statName]--;
      renderStats();
      updateSummary();
    }
  });
}
