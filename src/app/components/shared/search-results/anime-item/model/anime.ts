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
    genres : Array<Genres>
    streaming: Array<Streaming>
}


interface Demographics {
    mal_id: number
    name : string
}

export interface Images {
    webp: Webp
}

interface Webp {
    large_image_url: string
    image_url: string
}

interface Studio {
    name: string
}

interface Trailer {
    url: string
}

interface Genres {
    name: string
}
interface Streaming {
    name: string
    url: string
}