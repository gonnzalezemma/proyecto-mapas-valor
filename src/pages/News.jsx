import React from "react";
import { Loading } from "../components/Navbar/Loading";
import { useState, useEffect } from "react";
import CuerpoNews from "../components/CuerpoNews";

const News = () => {
  const [news, setNews] = useState([]);
  const loadInfo = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${import.meta.env.VITE_KEYNEWS}`,
        "X-RapidAPI-Host": "newscatcher.p.rapidapi.com",
      },
    };
    try {
      const res = await fetch(
        "https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=agricultura&lang=es&sort_by=relevancy&page=1&media=True&country=AR",
        options
      );
      const resJson = await res.json();
      setNews(resJson.articles);
    } catch (error) {
      return res.json(error);
    }
  };

  useEffect(() => {
    loadInfo();
  }, []);
  return (
    <>
      <h1>Noticias sobre el agro</h1>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {news ? (
              news.map((element) => (
                <div>
                  <div>
                    <div className="col">
                      <div className="card shadow-sm">
                        <CuerpoNews titleN={element.title} summary={element.summary} media={element.media} clean_url={element.clean_url} titleM={element.title} published_date={element.published_date}/>
                      </div>
                    </div>                     
                  </div>
                </div>
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
