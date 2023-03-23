export interface Emoji {
  name: string;
  category: Category;
  group: string;
  htmlCode: string[];
  unicode: string[];
}

export enum Category {
  smileysAndPeople = "smileys-and-people",
  animalsAndNature = "animals-and-nature",
  foodAndDrink = "food-and-drink",
  travelAndPlaces = "travel-and-places",
  activities = "activities",
  objects = "objects",
  symbols = "symbols",
  flags = "flags",
}
