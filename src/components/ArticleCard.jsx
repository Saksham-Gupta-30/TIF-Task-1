import React from 'react'

import '../styles/ArticleCard.scss'

const ArticleCard = ({ img, title, description }) => {
    return (
        <div className='card'>
            <div className='card__image'>
                <img src={img} alt={title} />
            </div>
            <div className='card__detail'>
                <div className='card__title'>{title}</div>
                <div className='card__description'>{description}</div>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default ArticleCard