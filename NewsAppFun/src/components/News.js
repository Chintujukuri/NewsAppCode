import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(45);

    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(75);

    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirst(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line
  }, [props.category]); // call again if page or category changes

  const fetchMoreData = async () => {
    setLoading(true);
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    if (parsedData.articles && parsedData.articles.length > 0) {
      setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
      setPage(nextPage);
    }
    setLoading(false);
  };

  return (
    <>
      <h2 className="text-center" style={{ margin: "30px 0px" }}>
        NewsMonkey - Top {capitalizeFirst(props.category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => (
              <div className="col-md-4 mb-4 d-flex" key={element.url || index}>
                <NewsItem
                  title={element.title || "No Title Available"}
                  description={element.content || "No Description Available"}
                  imageUrl={
                    element.urlToImage ||
                    "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
                  }
                  newsUrl={element.url || "/"}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
  apiKey: PropTypes.string,
};

export default News;
