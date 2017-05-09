function removeDoubleQuotes(w) {
    return w.replace(/['"]+/g, '');
}

module.exports = {
    removeDoubleQuotes
};