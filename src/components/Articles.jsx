import React from 'react'

import { ArticleCard } from './'
import { articles } from '../assets/Articles.js'
import { Prev, Next } from '../assets/index.js'

import '../styles/Articles.scss'

const Articles = () => {
    const [currentPage, setCurrentPage] = React.useState(1)
    const cardsPerPage = 3
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    // console.log('data', data)
    const currentCards = articles.data.slice(indexOfFirstCard, indexOfLastCard);
    const totalPages = Math.ceil(articles.data.length / cardsPerPage);


    return (
        <div className='articles'>
            <h2>Latest Articles</h2>
            <div className='articles__container'>
                {currentCards.map((article, index) => (
                    <ArticleCard key={index} img={article.img} title={article.title} description={article.description} />
                ))}
            </div>
            <div className='articles__pagination'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    <img src={Prev} alt="prev" />
                </button>
                <div className='articles__pagination__number'>
                    {currentPage} / {totalPages}
                </div>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    <img src={Next} alt="next" />
                </button>
            </div>
        </div>
    )
}

export default Articles