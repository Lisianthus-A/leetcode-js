function toLowerCase(s: string): string {
    const strArray = [];
    for (let i = 0; i < s.length; ++i) {
        const code = s.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            strArray.push(String.fromCharCode(code + 32));
        } else {
            strArray.push(s[i]);
        }
    }

    return strArray.join('');
};