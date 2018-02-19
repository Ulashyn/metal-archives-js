import { expect } from 'chai'
import * as fs from 'fs'
import * as request from 'request'
import { helloWorld } from '../lib'
import { Band } from '../lib/band'
import { parceBand } from '../lib/band-parser'

describe('Band', () => {
    it('Parse band info', (done) => {
        fs.readFile(__dirname + '/mocks/skogen.html', (err, data) => {
            const band = parceBand(data.toString())
            expect(band.name).to.equal('Skogen')
            expect(band.url).to.equal('https://www.metal-archives.com/bands/Skogen/3540295082')
            expect(band.country).to.equal('Sweden')
            expect(band.location).to.equal('Växjö')
            expect(band.status).to.equal('Active')
            expect(band.formedIn).to.equal('2009')
            expect(band.yearsActive).to.equal('2009-present')
            expect(band.genre).to.equal('Black Metal')
            expect(band.lyricalThemes).to.equal('Nature')
            expect(band.currentLabel).to.equal('Nordvis Produktion')
            expect(band.lastLabel).to.equal('')
            expect(band.logoUrl).to.equal(
                'https://www.metal-archives.com/images/3/5/4/0/3540295082_logo.jpg'
            )
            expect(band.bandImageUrl).to.equal(
                'https://www.metal-archives.com/images/3/5/4/0/3540295082_photo.jpg?0206'
            )
            done()
        })
    })
})
