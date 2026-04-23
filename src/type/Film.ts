export type FilmItem = {
    episode_id: number
    title: string
    opening_crawl: string
    release_date: string
}

export type CardFilmsProps = {
    items: FilmItem[]
}
