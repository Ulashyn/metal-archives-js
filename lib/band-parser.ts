import * as cheerio from 'cheerio'
import { Band } from './band'

export function parceBand(body: string): Band {
    const $ = cheerio.load(body)
    // TODO: add missing fields
    return {
        name: $('h1.band_name a').text().trim(),
        url: $('h1.band_name a').attr('href').trim(),
        country: $('dt:contains(Country of origin)').next().find('a').text(),
        location: $('dt:contains(Location)').next().text(),
        status: $('dt:contains(Status)').next().text(),
        formedIn: $('dt:contains(Formed in)').next().text(),
        yearsActive: $('dt:contains(Years active)').next().text().replace(/\s/g, ''),
        genre: $('dt:contains(Genre)').next().text(),
        lyricalThemes: $('dt:contains(Lyrical themes)').next().text(),
        currentLabel: $('dt:contains(Current label)').next().text(),
        lastLabel: $('dt:contains(Last label)').next().text(),
        logoUrl: $('.band_name_img a.image#logo').attr('href'),
        bandImageUrl: $('.band_img a.image#photo').attr('href')
    }
}
