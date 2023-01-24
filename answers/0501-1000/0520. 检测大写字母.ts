function detectCapitalUse(word: string): boolean {
    return /^[A-Z]+$|^[a-z]+$|^([A-Z][a-z]+)$/.test(word);
};