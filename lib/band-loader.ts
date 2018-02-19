import * as request from 'request'
import { Band } from './band'
import { parceBand } from './band-parser'

const BAND_URL = 'http://www.metal-archives.com/bands/asdasd/'

// TOOD: read https://mochajs.org
// TOOD: read https://github.com/cheeriojs/cheerio
// TODO: https://www.npmjs.com/package/request-promise

export function getBandById(): Band {
    request(BAND_URL + '3540295082', (error, response, body) => {
        return parceBand(body)
    })
}
