import React from 'react';

const NewsItem = (props) => {
    return (
        <div> 
            <div>
                <a href="{props.article.url}" target="_blank"> 
                    {props.article.title}
                    {
                        props.article.author ? 
                        <span> By <b> {props.article.author} </b> </span>
                        : ''
                    }
                   
                </a> 
            </div>
            <img width={400} src={props.article.urlToImage} alt={props.article.url}/>
            <div> {props.article.description} </div>
        </div>
    )
}

const News = (props) => {
    return(
        <div>
            { props.articles.length > 0 ? 
                props.articles.map( (article, index) => 
                    <NewsItem article={article} />
                )
                : <h2> No articles to display </h2>
            }

             { props.articles.length > 0 ? <a href="#"> Next Page</a> : '' }
            
        </div> 
    )
}

export default News