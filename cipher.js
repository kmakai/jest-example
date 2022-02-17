
const cipher = (str, key) => {
    str = str.toLowerCase();
    if (key === 0) {
        return str;
    } else {
        return str.replace(/[a-z]/g, (char) =>
            String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26) + 97)
        );
    };
};

module.exports = cipher;