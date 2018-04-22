const expect = require('chai').expect

const Jslibry = require('../lib/jslibry')
let jslibry = new Jslibry()

describe('Jslibry', function () {
    describe('字符串提取', function () {
        it('"A: 1,2,3,4"：字符串提取为[1,2,3,4]', function () {
            let toList = jslibry.collectStrToList();
            [1, 2, 3, 4].forEach((ele, inx) => {
                expect(toList[inx]).to.be.equal(ele);
            });
        })
    });

    describe('检查字符串是否存在，并且非空', function () {
        it('字符串不存在的情况', function () {
            const result = jslibry.checkStrIsEmpty();
            expect(result).to.not.be.ok;
        })
        it('字符串为空的情况', function () {
            const result = jslibry.checkStrIsEmpty('');
            expect(result).to.not.be.ok;
        })
        it('字符串不为空的情况', function () {
            const result = jslibry.checkStrIsEmpty('HELLO WORLD!');
            expect(result).to.be.ok;
        })
    });
})