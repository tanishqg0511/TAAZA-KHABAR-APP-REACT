import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl,name,date,author } = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{ backgroundColor:"#a7a6a6"}}>
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="badge rounded-pill text-bg-success" >{name}</span>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
