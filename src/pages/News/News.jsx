import React from 'react';

const News = ({a_news}) => {
    const {title, image_url} = a_news;
    return (
        <div>
            <h2 className='text-3xl text-white pt-5 pb-3'>{title}</h2>
            <img src={image_url} alt="" />
        </div>
    );
};

export default News;