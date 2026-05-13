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

const baseStats = {
  hp: {
    1: 300,
    2: 304,
    3: 312,
    4: 322,
    5: 334,
    6: 347,
    7: 362,
    8: 378,
    9: 396,
    10: 414,
    11: 434,
    12: 455,
    13: 476,
    14: 499,
    15: 522,
    16: 547,
    17: 572,
    18: 598,
    19: 624,
    20: 652,
    21: 680,
    22: 709,
    23: 738,
    24: 769,
    25: 800,
    26: 833,
    27: 870,
    28: 910,
    29: 951,
    30: 994,
    31: 1037,
    32: 1081,
    33: 1125,
    34: 1170,
    35: 1216,
    36: 1262,
    37: 1308,
    38: 1355,
    39: 1402,
    40: 1450,
    41: 1476,
    42: 1503,
    43: 1529,
    44: 1555,
    45: 1581,
    46: 1606,
    47: 1631,
    48: 1656,
    49: 1680,
    50: 1704,
    51: 1727,
    52: 1750,
    53: 1772,
    54: 1793,
    55: 1814,
    56: 1834,
    57: 1853,
    58: 1871,
    59: 1887,
    60: 1900,
    61: 1906,
    62: 1912,
    63: 1918,
    64: 1924,
    65: 1930,
    66: 1936,
    67: 1942,
    68: 1948,
    69: 1954,
    70: 1959,
    71: 1965,
    72: 1971,
    73: 1977,
    74: 1982,
    75: 1988,
    76: 1993,
    77: 1999,
    78: 2004,
    79: 2010,
    80: 2015,
    81: 2020,
    82: 2026,
    83: 2031,
    84: 2036,
    85: 2041,
    86: 2046,
    87: 2051,
    88: 2056,
    89: 2060,
    90: 2065,
    91: 2070,
    92: 2074,
    93: 2078,
    94: 2082,
    95: 2086,
    96: 2090,
    97: 2094,
    98: 2097,
    99: 2100,
  },

  fp: {
    1: 50,
    2: 53,
    3: 56,
    4: 59,
    5: 62,
    6: 66,
    7: 69,
    8: 72,
    9: 75,
    10: 78,
    11: 82,
    12: 85,
    13: 88,
    14: 91,
    15: 95,
    16: 100,
    17: 105,
    18: 110,
    19: 116,
    20: 121,
    21: 126,
    22: 131,
    23: 137,
    24: 142,
    25: 147,
    26: 152,
    27: 158,
    28: 163,
    29: 168,
    30: 173,
    31: 179,
    32: 184,
    33: 189,
    34: 194,
    35: 200,
    36: 207,
    37: 214,
    38: 221,
    39: 228,
    40: 235,
    41: 242,
    42: 248,
    43: 255,
    44: 262,
    45: 268,
    46: 275,
    47: 281,
    48: 287,
    49: 293,
    50: 300,
    51: 305,
    52: 311,
    53: 317,
    54: 322,
    55: 328,
    56: 333,
    57: 338,
    58: 342,
    59: 346,
    60: 350,
    61: 352,
    62: 355,
    63: 357,
    64: 360,
    65: 362,
    66: 365,
    67: 367,
    68: 370,
    69: 373,
    70: 375,
    71: 378,
    72: 380,
    73: 383,
    74: 385,
    75: 388,
    76: 391,
    77: 393,
    78: 396,
    79: 398,
    80: 401,
    81: 403,
    82: 406,
    83: 408,
    84: 411,
    85: 414,
    86: 416,
    87: 419,
    88: 421,
    89: 424,
    90: 426,
    91: 429,
    92: 432,
    93: 434,
    94: 437,
    95: 439,
    96: 442,
    97: 444,
    98: 447,
    99: 450,
  },

  stamina: {
    1: 80,
    2: 81,
    3: 82,
    4: 84,
    5: 85,
    6: 87,
    7: 88,
    8: 92,
    9: 94,
    10: 96,
    11: 97,
    12: 99,
    13: 101,
    14: 103,
    15: 105,
    16: 106,
    17: 108,
    18: 110,
    19: 111,
    20: 113,
    21: 115,
    22: 116,
    23: 118,
    24: 120,
    25: 121,
    26: 123,
    27: 125,
    28: 126,
    29: 128,
    30: 130,
    31: 131,
    32: 132,
    33: 133,
    34: 135,
    35: 136,
    36: 137,
    37: 138,
    38: 140,
    39: 141,
    40: 142,
    41: 143,
    42: 145,
    43: 146,
    44: 147,
    45: 148,
    46: 150,
    47: 151,
    48: 152,
    49: 153,
    50: 155,
    51: 155,
    52: 155,
    53: 155,
    54: 156,
    55: 156,
    56: 156,
    57: 157,
    58: 157,
    59: 157,
    60: 158,
    61: 158,
    62: 158,
    63: 158,
    64: 159,
    65: 159,
    66: 159,
    67: 160,
    68: 160,
    69: 160,
    70: 161,
    71: 161,
    72: 161,
    73: 162,
    74: 162,
    75: 162,
    76: 162,
    77: 163,
    78: 163,
    79: 163,
    80: 164,
    81: 164,
    82: 164,
    83: 165,
    84: 165,
    85: 165,
    86: 166,
    87: 166,
    88: 166,
    89: 166,
    90: 167,
    91: 167,
    92: 167,
    93: 168,
    94: 168,
    95: 168,
    96: 169,
    97: 169,
    98: 169,
    99: 170,
  },

  equipmentLoad: {
    1: 45.0,
    2: 45.0,
    3: 45.0,
    4: 45.0,
    5: 45.0,
    6: 45.0,
    7: 45.0,
    8: 45.0,
    9: 46.6,
    10: 48.2,
    11: 49.8,
    12: 51.4,
    13: 52.9,
    14: 54.5,
    15: 56.1,
    16: 57.7,
    17: 59.3,
    18: 60.9,
    19: 62.5,
    20: 64.1,
    21: 65.6,
    22: 67.2,
    23: 68.8,
    24: 70.4,
    25: 72.0,
    26: 73.0,
    27: 74.1,
    28: 75.2,
    29: 76.4,
    30: 77.6,
    31: 78.9,
    32: 80.2,
    33: 81.5,
    34: 82.8,
    35: 84.1,
    36: 85.4,
    37: 86.8,
    38: 88.1,
    39: 89.5,
    40: 90.9,
    41: 92.3,
    42: 93.7,
    43: 95.1,
    44: 96.5,
    45: 97.9,
    46: 99.4,
    47: 100.8,
    48: 102.2,
    49: 103.7,
    50: 105.2,
    51: 106.6,
    52: 108.1,
    53: 109.6,
    54: 111.0,
    55: 112.5,
    56: 114.0,
    57: 115.5,
    58: 117.0,
    59: 118.5,
    60: 120.0,
    61: 121.0,
    62: 122.1,
    63: 123.1,
    64: 124.1,
    65: 125.1,
    66: 126.2,
    67: 127.2,
    68: 128.2,
    69: 129.2,
    70: 130.3,
    71: 131.3,
    72: 132.3,
    73: 133.3,
    74: 134.4,
    75: 135.4,
    76: 136.4,
    77: 137.4,
    78: 138.5,
    79: 139.5,
    80: 140.5,
    81: 141.5,
    82: 142.6,
    83: 143.6,
    84: 144.6,
    85: 145.6,
    86: 146.7,
    87: 147.7,
    88: 148.7,
    89: 149.7,
    90: 150.8,
    91: 151.8,
    92: 152.8,
    93: 153.8,
    94: 154.9,
    95: 155.9,
    96: 156.9,
    97: 157.9,
    98: 159.0,
    99: 160.0,
  },
};

let addedAttributes = {
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
const attributes = document.querySelectorAll(".attribute-container");
let selectedOption;

const summaryClass = document.querySelector('[data-summary="class"]');
const summaryLevel = document.querySelector('[data-summary="level"]');
const summaryRunesNeeded = document.querySelector(
  '[data-summary="runes-needed"]',
);
const summaryBuildType = document.querySelector('[data-summary="build-type"]');
const summaryHP = document.querySelector('[data-summary="hp"]');
const summaryFP = document.querySelector('[data-summary="fp"]');
const summaryStamina = document.querySelector('[data-summary="stamina"]');
const summaryMainWeapon = document.querySelector(
  '[data-summary="main-weapon"]',
);
const summaryEquipmentLoad = document.querySelector(
  '[data-summary="equip-load"]',
);

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

const resetAttributes = () => {
  for (const attribute of attributes) {
    const attributeLevel = attribute.querySelector(".attribute-level");
    const attributeName = attribute.dataset.attribute;
    const base = getSelectedClass();
    attributeLevel.textContent = base[attributeName];
    addedAttributes[attributeName] = 0;
  }
};

const getLevelUpRunes = (level) => {
  const scalingFactor = Math.max(0, 0.02 * (level - 11));

  const runesNeeded = Math.floor(
    (scalingFactor + 0.1) * Math.pow(level + 81, 2) + 1,
  );

  return runesNeeded;
};

const getTotalRunesNeeded = (baseLevel, targetLevel) => {
  let runes = 0;
  for (let start = baseLevel; start < targetLevel; start++) {
    runes += getLevelUpRunes(start);
  }

  return runes;
};

const updateSummary = () => {
  let level = 0;
  const baseLevel = getSelectedClass().level;

  for (const attribute in addedAttributes) {
    level += addedAttributes[attribute];
  }

  const totalLevel = baseLevel + level;

  summaryClass.textContent = selectedOption.textContent;
  summaryLevel.textContent = totalLevel;
  summaryRunesNeeded.textContent = getTotalRunesNeeded(
    baseLevel,
    totalLevel,
  ).toLocaleString();
  summaryHP.textContent =
    baseStats.hp[getSelectedClass().vigor + addedAttributes.vigor];
  summaryFP.textContent =
    baseStats.fp[getSelectedClass().mind + addedAttributes.mind];
  summaryStamina.textContent =
    baseStats.stamina[getSelectedClass().endurance + addedAttributes.endurance];
  summaryEquipmentLoad.textContent =
    baseStats.equipmentLoad[
      getSelectedClass().endurance + addedAttributes.endurance
    ];
};

const renderAttributes = () => {
  const base = getSelectedClass();

  for (const attribute of attributes) {
    const attributeLevel = attribute.querySelector(".attribute-level");
    const attributeName = attribute.dataset.attribute;

    attributeLevel.textContent =
      base[attributeName] + addedAttributes[attributeName];
  }
};

checkForSelectedOption();
resetAttributes();
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
      resetAttributes();
      updateSummary();
      event.stopPropagation();
    }
  });
}

for (const attribute of attributes) {
  const increase = attribute.querySelector(".fa-square-plus");
  const decrease = attribute.querySelector(".fa-square-minus");
  const attributeLevel = attribute.querySelector(".attribute-level");
  const attributeName = attribute.dataset.attribute;

  increase.addEventListener("click", () => {
    addedAttributes[attributeName]++;
    renderAttributes();
    updateSummary();
  });

  decrease.addEventListener("click", () => {
    const minAttributeStat = getSelectedClass()[attributeName];

    if (addedAttributes[attributeName] > 0) {
      addedAttributes[attributeName]--;
      renderAttributes();
      updateSummary();
    }
  });
}
