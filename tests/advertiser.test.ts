import {Advertiser} from '../src/advertiser'
import {expect} from 'chai'

describe('advertiser', () => {
    it('should return false on call isScrolledIntoView without parameter', () =>{
        let advertiser = new Advertiser()
        expect(advertiser.isScrolledIntoView({})).to.equal(false)
    })

    it('should return false on call initTimeEvents without parameter', () =>{
        let advertiser = new Advertiser()
        expect(advertiser.initTimeEvents({})).to.equal(false)
    })    
})