function greatestLetter(s: string): string {
    // arr[charCode] -> 0b00 0b01 0b11
    // A: 65 a: 97 -> arr[0]
    const arr = new Array(26).fill(0);

    for (let i = 0; i < s.length; ++i) {
        const code = s.charCodeAt(i);
        if (code > 64 && code < 91) {
            // uppercase
            arr[code - 65] |= 0b01;
        } else {
            // lowercase
            arr[code - 97] |= 0b10;
        }
    }

    for (let i = 25; i >= 0; --i) {
        if (arr[i] === 0b11) {
            return String.fromCharCode(i + 65);
        }
    }

    return "";
};