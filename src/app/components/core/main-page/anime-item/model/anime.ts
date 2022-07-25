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
}


export interface Images {
    jpg: JPG
}
export interface JPG {
    large_image_url: string
}

export interface Studio {
    name: string
}

export interface Trailer {
    url: string
}