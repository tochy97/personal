const base = "https://api.nytimes.com/svc/search/v2";

export const getNYTArticles = (search: string, date: string) => {
    return new Promise ((resolve, rejeect) => {
        resolve(fetch(base + "/articlesearch.json?q=" + search + "&facet_fields=source&facet=true&begin_date=" + date + "&end_date=" + date + "&api-key=EZ5dWTpsog3riQP0R0DK2cZh64RtQ2vp", {
            method: "GET"
        }));
    })
}