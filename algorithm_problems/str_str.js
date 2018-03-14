const strStr = (haystack, needle) => {
    if (haystack.length === 0 && needle.length === 0) return 0;

    const nLength = needle.length;

    for (let i = 0; i <= haystack.length - nLength; i ++) {
        const slice = haystack.slice(i,  i + nLength);
        if (slice === needle) return i;
    }
    return -1;
};

console.log(strStr("", ""));
console.log(strStr("hello world", "ll"));
console.log(strStr("hello world", "ld"));
