import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Home = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data));

    },[]);
    // console.log(news);

    return (
        <div className='p-3 w-full min-h-[50vh] border text-center'>
            <h2 className='text-3xl mt-5 font-bold'>Welcome to Homepage {news.length}</h2>
            {
                news.map(a_news => <News key={a_news._id} a_news={a_news}></News>)
            }
        </div>
    );
};

export default Home;