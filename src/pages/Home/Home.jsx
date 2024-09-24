import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Home = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        // Fetch data from local API
        const fetchData = async()=> {
            const response = await fetch('news.json');
            const data = await response.json();
            setNews(data);
        }
        fetchData();

    },[]);
    // console.log(news);

    // Logic to calculate the index of the items to show for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = news.slice(indexOfFirstItem, indexOfLastItem);

    // Handler for changing the page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div className='p-3 w-full min-h-[50vh] border text-center'>
            <h2 className='text-5xl pb-5 font-bold border-b'>Welcome to Homepage</h2>
            {
                currentData.map(a_news => <News key={a_news._id} a_news={a_news}></News>)
            }
            {/* Simple Pagination */}
            <div className='mt-5'>
                {Array.from({ length: Math.ceil(news.length / itemsPerPage) }, (_, index) => (
                <button className='m-2 p-3 border inline-block' key={index} onClick={() => paginate(index + 1)}>
                    {index + 1}
                </button>
                ))}
            </div>
        </div>
    );
};

export default Home;