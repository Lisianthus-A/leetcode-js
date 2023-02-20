function bestHand(ranks: number[], suits: string[]): string {
    let res = 0b00;

    const m: Record<string, number> = {};

    for (let i = 0; i < ranks.length; ++i) {
        const rank = ranks[i];
        const suit = suits[i];

        m[rank] = m[rank] + 1 || 1;
        m["_" + suit] = m["_" + suit] + 1 || 1;

        if (m["_" + suit] >= 5) {
            return "Flush";
        }

        if (m[rank] >= 3) {
            res |= 0b10;
        }

        if (m[rank] >= 2) {
            res |= 0b01;
        }
    }

    if ((res & 0b10) === 0b10) {
        return "Three of a Kind";
    }

    if ((res & 0b01) === 0b01) {
        return "Pair";
    }


    return "High Card";
};