const base = "https://api.nytimes.com/svc/search/v2";

export const getNYTArticles = (search: string, first: string, second: string) => {
    return new Promise ((resolve, rejeect) => {
        resolve(fetch(base + "/articlesearch.json?&fq=" + search + "&begin_date=" + first + "&end_date=" + second + "&api-key=EZ5dWTpsog3riQP0R0DK2cZh64RtQ2vp", {
            method: "GET"
        }));
    })
}