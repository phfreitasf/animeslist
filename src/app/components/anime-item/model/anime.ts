export interface Anime {
    id?: number
    title?: string
    title_japanese?: string
    background?: string
    images?: Images
    synopsis:string
    year:number
    score:number
    url:string
}


export interface Images {

    jpg: JPG
}
export interface JPG {

    large_image_url: string
}

