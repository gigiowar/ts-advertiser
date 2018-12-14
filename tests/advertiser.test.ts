import {Advertiser} from '../src/advertiser'
import {expect} from 'chai'

describe('advertiser', () => {
    it('should return false on call isScrolledIntoView without parameter', () =>{
        let advertiser = new Advertiser()
        expect(advertiser.isScrolledIntoView(false)).to.equal(false)
    })

    it('should return false on call initTimeEvents without parameter', () =>{
        let advertiser = new Advertiser()
        expect(advertiser.initTimeEvents(false, [])).to.equal(false)
    })  

    it('should return true on call startVideo', () =>{
        let advertiser = new Advertiser()
        expect(advertiser.startVideo(1)).to.equal(true)
    })        
})