function decode(encoded: number[], first: number): number[] {
    encoded.unshift(first);
    for (let i = 1; i < encoded.length; ++i) {
        encoded[i] ^= encoded[i - 1];
    }
    return encoded;
};