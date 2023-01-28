import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
export class NewsComponent extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalisefunc = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0
        }
        document.title = `${this.capitalisefunc(this.props.category)} - TAAZA KHABAR`
    }
    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dc80b2fe4fec4e1eb1870c4c3e36a654&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
        this.setState({page:this.state.page+1})
        // this.setState({ loading: false })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({  articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults});
      }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dc80b2fe4fec4e1eb1870c4c3e36a654&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ loading: false, articles: parsedData.articles, totalResults: parsedData.totalResults });
    }
    async componentDidMount() {
        this.updateNews();
    }
    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews();
    // }
    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews();
    // }
    render() {
        return (<>
            <div className='container my-4'>
                <h1 className='text-center' style={{ margin: "25px",marginTop:"90px", fontsize: "50px" }}>TOP HEADLINES - {this.props.category.toUpperCase()}</h1>
                {this.state.loading && <Loading/>}
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!==this.state.totalResults} loader={<Loading/>}>
                    <div className="container">
                    <div className="row">
                        { this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 80) : ""} description={element.description ? element.description.slice(0, 100) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/img/2023/01/24/1600x900/breaking_news_jan_24_1674521545190_1674521545491_1674521545491.jpeg"} newsUrl={element.url} name={element.source.name} author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
            </>
        )
    }
}

export default NewsComponent
