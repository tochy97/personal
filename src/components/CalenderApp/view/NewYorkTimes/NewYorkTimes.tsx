import React, { useEffect, useState } from 'react'
import { getNYTArticles } from '../../controller/NewYorkTimes'
import { streamToJSON } from '../../../functions';
import { pageDivider, stack } from '../../../classNames';
import { dayLink } from '../../model/classNames';
import Loading from '../../../../pages/Loading/Loading';

type Props = {
    day: string,
    search: string
}

export default function NewYorkTimes({ day, search }: Props) {
    const [articles, setArticles] = useState<Array<any>>([]);

    useEffect(() => {
        const fetchData = async () => {
            let times: any = await getNYTArticles("music", day);
            times = await streamToJSON(times.body);
            setArticles(times.response.docs);
        }
        fetchData();
    }, [])

    return (
        <div>
            {
                articles.length > 0 ?
                <>
                    New York Times best articles from this day
                    <hr className={pageDivider}/>
                    {
                        articles.map((ele) => (
                            <div className={stack}>
                                <div className='flex flex-row'>-{" "}<a target="_blank" className={dayLink} href={ele.web_url}>{ele.abstract}</a></div>
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