export const wrong = "#c0392b";
export const right = "#27ae60";
export const primary = "tomato";
export const disabled = "#d3d3d3";
export const danger = "red";
export const background = "white";
export const contrastText = "white";
export const black = "#000";
export const inputBackground = "#f9f9f9";

const cardColors = [
  "#16a085",
  "#f1c40f",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#d35400",
];

export const getColor = (index) =>
  cardColors[Math.floor(index % cardColors.length)];
