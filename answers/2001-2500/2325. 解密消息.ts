function decodeMessage(key: string, message: string): string {
    const m = { " ": " " };
    let charCode = 97;
    for (let i = 0; i < key.length; ++i) {
        const char = key[i];
        if (m[char] !== undefined || char === " ") {
            continue;
        }
        m[char] = String.fromCharCode(charCode++);
    }

    let res = "";
    for (let i = 0; i < message.length; ++i) {
        const char = message[i];
        res += m[char];
    }

    return res;
}
