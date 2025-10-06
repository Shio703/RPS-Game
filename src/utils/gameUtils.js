const items = ["rock", "paper", "scissor"];

const generatorFunc = () => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

module.exports = { generatorFunc };
