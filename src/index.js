module.exports = function check(str, bracketsConfig) {
    let list = [];

    for (let i = 0; i < str.length; i++) {
        list.push(str[i]);
    }
    list.indexOf(str);
    let retry = 0;
    while (retry <= 1) {
        for (let j = 0; j < list.length - 1; j++) {
            for (let k = 0; k < bracketsConfig.length; k++) {
                if (bracketsConfig[k][0] === list[j]) {
                    if (bracketsConfig[k][1] === list[j + 1]) {
                        list.splice(j, 2);
                        j = 0;
                    }
                }
            }
        }
        retry++;
    }
    return list.length === 0;
}
