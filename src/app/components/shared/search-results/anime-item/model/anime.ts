export interface Anime {
    mal_id: string
    title: string
    title_japanese: string
    title_english: string
    background: string
    images: Images
    synopsis: string
    year: number
    score: number
    url: string
    rating: string
    status: string
    episodes: string
    studios: Array<Studio>
    trailer: Trailer
    demographics: Array<Demographics>
}


interface Demographics {
    mal_id: number
    name : string
}

interface Images {
    webp: Webp
}

interface Webp {
    large_image_url: string
}

export interface Studio {
    name: string
}

export interface Trailer {
    url: string
}