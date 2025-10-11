import React, { useEffect, useState } from 'react'
import { getNYTArticles } from '../../controller/NewYorkTimes'
import { streamToJSON } from '../../../functions';
import { pageDivider, stack } from '../../../classNames';
import { dayLink } from '../classNames';
import Loading from '../../../../pages/Loading/Loading';

type Props = {
    first: string,
    second: string,
    search: string
}

export default function NewYorkTimes({ first, second, search }: Props) {
    const [articles, setArticles] = useState<Array<any>>([]);

    useEffect(() => {
        const fetchData = async () => {
            let times: any = await getNYTArticles("music", first, second);
            times = await streamToJSON(times.body);
            if (times.response.docs && times.response.docs.length > 0) {
                setArticles(times.response.docs);
            }
            else {
                setArticles(
                    [
                        {
                            abstract: "No articles found"
                        }
                    ]
                )
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {
                articles?.length > 0 ?
                <>
                    New York Times best articles from this day
                    <hr className={pageDivider}/>
                    {
                        articles.map((ele, key) => (
                            <div className={stack} key={key}>
                                <div className='flex flex-row'><a target="_blank" className={dayLink} href={ele.web_url}>{ele.abstract}</a></div>
                            </div>
                        ))
                    }
                </>
                : 
                <Loading/>
            }
        </div>
    )
}