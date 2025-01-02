function createMagicPotion(
  potions: number[],
  target: number
): [number, number] | undefined {
  const seen = new Map<number, number>();

  for (let i = 0; i < potions.length; i++) {
    const currentPotion = potions[i];
    const difference = target - currentPotion;

    if (seen.has(difference)) {
      return [seen.get(difference) as number, i];
    }

    seen.set(currentPotion, i);
  }

  return undefined; // Explicitly return undefined if no match is found
}
