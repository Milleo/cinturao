export const game = {
  "minWeight": 48,
  "maxWeight": 100,
  "minAge": 18,
  "maxAge": 50,
  "startingPoints": 15,
  "minInitialSkill": 0,
  "maxInitialSkill": 10,
  "genders": ["male", "female"]
};

export const totalXpByLevel = (level) => {
  const XP_FACTOR = 1.35
  const XP_BASE = 100
  return Math.floor(((level - 1) * XP_FACTOR) * 100) + XP_BASE 
}

export const trainingRoutines = {
  endurance: {
    factor: null
  },
  strength: {
    factor: { type: "weight" } 
  },
  reflexes: {
    factor: { type: "weight", reverse: true }
  }
};

export const locations = [
  { name: "gym", rentalValue: 0.0, minSponsors: 0, minLevel: 1 }, 
  { name: "local_stadium", rentalValue: 100.0, minSponsors: 0, minLevel: 5 }, 
  { name: "municipal_stadium", rentalValue: 1000.0, minSponsors: 1, minLevel: 10 }, 
  { name: "big_city_stadium", rentalValue: 10000.0, minSponsors: 2, minLevel: 20 }, 
  { name: "sports_company_stadium", rentalValue: 500000.0, minSponsors: 4, minLevel: 30 }, 
  { name: "international_statium", rentalValue: 1000000.0, minSponsors: 6, minLevel: 50 }
];

export const gyms = [
  { name: "local_gym", bonusXP: 0.0 },
  { name: "crossfit_gym", bonusXP: 0.1 },
  { name: "boxing_experts_gym", bonusXP: 0.15 },
  { name: "olympic_gym", bonusXP: 0.2 },
  { name: "sports_company_gym", bonusXP: 0.25 },
]

export const sponsors = [
  { name: "joe_bakery", monthPayment: 500.00, minLevel: 1 }, 
  { name: "repairs_store", monthPayment: 1000.00, minLevel: 10 }, 
  { name: "tech_store", monthPayment: 2000.00, minLevel: 16 }, 
  { name: "market_store_chain", monthPayment: 4000.00, minLevel: 24 }, 
  { name: "fast_food_store_chain", monthPayment: 10000.00, minLevel: 32 }, 
  { name: "sports_company", monthPayment: 50000.00, minLevel: 60 } 
];

export const weightCategories = {
  "amateur": {
    "male": {
      "super_heavyweight":[91,null],
      "heavyweight":[81,91],
      "light_heavyweight":[75,81],
      "middleweight":[69,75],
      "welterweight":[64,69],
      "light_welterweight":[60,64],
      "lightweight":[56,60],
      "bantamweight":[52,56],
      "flyweight":[49,52],
      "light_flyweight":[null, 49]
    },
    "female": {
      "heavyweight":[81,null],
      "light_heavyweight":[75,81],
      "middleweight":[69,75],
      "light_middleweight":[64,69],
      "welterweight":[60,64],
      "lightweight":[57,60],
      "featherweight":[54,57],
      "bantamweight":[51,54],
      "flyweight":[48,51],
      "light_flyweight":[null, 48]
    }
  },
  "professional": {
    "wba": {
      "heavyweight": [90.72, null],
      "cruiserweight": [79.38, 90.72],
      "light_heavyweight": [76.2, 79.38],
      "super_middleweight": [72.57, 76.2],
      "middleweight": [69.85, 72.57],
      "super_welterweight": [66.68, 69.85],
      "welterweight": [63.5, 66.68],
      "super_lightweight": [61.23, 63.5],
      "lightweight": [58.97, 61.23],
      "super_featherweight": [57.15, 58.97],
      "featherweight": [55.34, 57.15],
      "super_bantamweight": [53.52, 55.34],
      "bantamweight": [52.16, 53.52],
      "super_flyweight": [50.8, 52.16],
      "flyweight": [48.99, 50.8],
      "light_flyweight": [47.63, 48.99],
      "minimumweight": [46.27, 47.63],
      "light_minimymweight": [null, 46.27]
    },
    "wbc": {
      "heavyweight": [90.72, null],
      "cruiserweight": [79.38, 90.72],
      "light_heavyweight": [76.2, 79.38],
      "super_middleweight": [72.57, 76.2],
      "middleweight": [69.85, 72.57],
      "super_welterweight": [66.68, 69.85],
      "welterweight": [63.5, 66.68],
      "super_lightweight": [61.23, 63.5],
      "lightweight": [58.97, 61.23],
      "super_featherweight": [57.15, 58.97],
      "featherweight": [55.34, 57.15],
      "super_bantamweight": [53.52, 55.34],
      "bantamweight": [52.16, 53.52],
      "super_flyweight": [50.8, 52.16],
      "flyweight": [48.99, 50.8],
      "light_flyweight": [47.63, 48.99],
      "mini_flyweight": [46.27, 47.63],
      "atomweight": [null, 46.27]
    },
    "wbo": {
      "heavyweight": [90.72, null],
      "junior_heavyweight": [79.38, 90.72],
      "light_heavyweight": [76.2, 79.38],
      "super_middleweight": [72.57, 76.2],
      "middleweight": [69.85, 72.57],
      "junior_middleweight": [66.68, 69.85],
      "welterweight": [63.5, 66.68],
      "junior_welterweight": [61.23, 63.5],
      "lightweight": [58.97, 61.23],
      "junior_lightweight": [57.15, 58.97],
      "featherweight": [55.34, 57.15],
      "junior_featherweight": [53.52, 55.34],
      "bantamweight": [52.16, 53.52],
      "junior_bantamweight": [50.8, 52.16],
      "flyweight": [48.99, 50.8],
      "junior_flyweight": [47.63, 48.99],
      "strawweight": [46.27, 47.63],
      "junior_atomweight": [null, 46.27]
    },
    "ibf": {
      "heavyweight": [90.72, null],
      "cruiserweight": [79.38, 90.72],
      "light_heavyweight": [76.2, 79.38],
      "light_cruiserweight": [72.57, 76.2],
      "middleweight": [69.85, 72.57],
      "light_middleweight": [66.68, 69.85],
      "welterweight": [63.5, 66.68],
      "light_welterweight": [61.23, 63.5],
      "lightweight": [58.97, 61.23],
      "junior_lightweight": [57.15, 58.97],
      "featherweight": [55.34, 57.15],
      "junior_featherweight": [53.52, 55.34],
      "bantamweight": [52.16, 53.52],
      "junior_bantamweight": [50.8, 52.16],
      "flyweight": [48.99, 50.8],
      "junior_flyweight": [47.63, 48.99],
      "minimumweight": [null, 47.63]
    },
    "boxrec": {
      "heavyweight": [90.72, null],
      "cruiserweight": [79.38, 90.72],
      "light_heavyweight": [76.2, 79.38],
      "super_middleweight": [72.57, 76.2],
      "middleweight": [69.85, 72.57],
      "light_middleweight": [66.68, 69.85],
      "welterweight": [63.5, 66.68],
      "light_welterweight": [61.23, 63.5],
      "lightweight": [58.97, 61.23],
      "super_featherweight": [57.15, 58.97],
      "featherweight": [55.34, 57.15],
      "super_bantamweight": [53.52, 55.34],
      "bantamweight": [52.16, 53.52],
      "super_flyweight": [50.8, 52.16],
      "flyweight": [48.99, 50.8],
      "light_flyweight": [47.63, 48.99],
      "minimumweight": [46.27, 47.63],
      "light_minimumweight": [null, 46.27]
    },
    "the_ring": {
      "heavyweight": [90.72, null],
      "cruiserweight": [79.38, 90.72],
      "junior_cruiserweight": [76.2, 79.38],
      "super_middleweight": [72.57, 76.2],
      "middleweight": [69.85, 72.57],
      "junior_middleweight": [66.68, 69.85],
      "welterweight": [63.5, 66.68],
      "junior_welterweight": [61.23, 63.5],
      "lightweight": [58.97, 61.23],
      "junior_lightweight": [57.15, 58.97],
      "featherweight": [55.34, 57.15],
      "junior_featherweight": [53.52, 55.34],
      "bantamweight": [52.16, 53.52],
      "junior_bantamweight": [50.8, 52.16],
      "flyweight": [48.99, 50.8],
      "junior_flyweight": [47.63, 48.99],
      "strawweight": [46.27, 47.63],
      "junior_strawweight": [null, 46.27]
    },
    "boxing_news": {
      "heavyweight": [90.72, null],
      "cruiserweight": [79.38, 90.72],
      "light_heavyweight": [76.2, 79.38],
      "super_middleweight": [72.57, 76.2],
      "middleweight": [69.85, 72.57],
      "light_middleweight": [66.68, 69.85],
      "welterweight": [63.5, 66.68],
      "light_welterweight": [61.23, 63.5],
      "lightweight": [58.97, 61.23],
      "super_featherweight": [57.15, 58.97],
      "featherweight": [55.34, 57.15],
      "super_bantamweight": [53.52, 55.34],
      "bantamweight": [52.16, 53.52],
      "super_flyweight": [50.8, 52.16],
      "flyweight": [48.99, 50.8],
      "super_strawweight": [47.63, 48.99],
      "strawweight": [46.27, 47.63],
      "atomweight": [null, 46.27]
    }
  }
}
