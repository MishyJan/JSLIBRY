const expect = require('chai').expect

const cart = require('../lib/jslibry/jslibry')
var cartTest = new cart()

describe('Cart', function () {
    describe('subtotal', function () {
        it('单价是 10 块钱的 3 件商品小计金额应该是 30 块', function () {
            var subtotal = cartTest.subtotal(10, 3)
            expect(subtotal).to.equal(30)
        })
    })
})