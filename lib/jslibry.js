class Jslibry {

    /* 
        从一个字符串中(A: 1,2,3,4)提取一个列表 => [1,2,3,4]
        @return  number array
     */
    collectStrToList() {
        const str = 'A: 1,2,3,4';
        const start = str.indexOf(':');
        const end = str.length;
        // 通过substring 截取
        let newArrList = str.substring(start + 1, end).split(',');
        newArrList.forEach((el, inx, arr) => {
            // 除去前后空格，并转换为number类型
            arr[inx] = Number(el.trim());
        });

        return newArrList;
    }

    /* 
        检查一个已存在的，并且非空的字符串
        @return boolean
     */
    checkStrIsEmpty(str) {
        if (!str) return false;
        return true;
    }
}

module.exports = Jslibry