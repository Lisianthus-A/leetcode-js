function strStr(haystack: string, needle: string): number {
    if (needle === '') {
        return 0;
    }

    const nLen = needle.length;

    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle[0] && haystack[i + nLen - 1] === needle[nLen - 1] && haystack.slice(i, i + nLen) === needle) {
            return i;
        }
    }

    return -1;
};