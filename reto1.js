function createMagicPotion(potions, target) {
  const seen = new Map();

  for (let i = 0; i < potions.length; i++) {
    const currentPotion = potions[i];
    const difference = target - currentPotion;

    if (seen.has(difference)) {
      return [seen.get(difference), i];
    }

    seen.set(currentPotion, i);
  }
}
