const strStr = (haystack, needle) => {
    const nLength = needle.length;

    for (let i = 0; i < haystack.length; i ++) {
        const slice = haystack.slice(i,  i + nLength);
        if (slice === needle) return true;
    }
    return false;
};

console.log(strStr("hello world", "ll"));
console.log(strStr("hello world", "ld"));
