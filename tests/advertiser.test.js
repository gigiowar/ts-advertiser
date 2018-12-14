"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var advertiser_1 = require("../src/advertiser");
var chai_1 = require("chai");
describe('advertiser', function () {
    it('should return false on call isScrolledIntoView without parameter', function () {
        var advertiser = new advertiser_1.Advertiser();
        chai_1.expect(advertiser.isScrolledIntoView(false)).to.equal(false);
    });
    it('should return false on call initTimeEvents without parameter', function () {
        var advertiser = new advertiser_1.Advertiser();
        chai_1.expect(advertiser.initTimeEvents(false)).to.equal(false);
    });
});
