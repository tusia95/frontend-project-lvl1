export default function getRandomNumber(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
