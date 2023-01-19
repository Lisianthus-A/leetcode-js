function strongPasswordCheckerII(password: string): boolean {
    if (password.length < 8) {
        return false;
    }

    let res = 0;
    const s = new Set("!@#$%^&*()-+");
    for (let i = 0; i < password.length; ++i) {
        if (password[i] === (password[i + 1] || "")) {
            return false;
        }

        const code = password.charCodeAt(i);
        // a - z
        if (code >= 97 && code <= 122) {
            res |= 0b0001;
            continue;
        }
        // A - Z
        if (code >= 65 && code <= 90) {
            res |= 0b0010;
            continue;
        }
        // 0 - 9
        if (code >= 48 && code <= 57) {
            res |= 0b0100;
            continue;
        }
        // !@#$%^&*()-+
        if (s.has(password[i])) {
            res |= 0b1000;
        }
    }

    return res === 0b1111;
};