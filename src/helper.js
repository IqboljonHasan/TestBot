module.exports = function nextPage(currP, pagesNum) {
    if(pagesNum > currP) {currP = currP + 1;}
    return currP
};

module.exports = function prevPage(currP) {
    if(currP > 1) {currP = currP - 1;}
    return currP
};
