import React from "react";
import { Loading } from "../components/Navbar/Loading";
import { useState, useEffect } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const loadInfo = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "",
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
      <h3>seccion de moda</h3>
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {news ? (
              news.map((element) => (
                <div class="col">
                  <div class="card shadow-sm">
                    <a href={element.link} target="_blank">
                      <img
                        src={element.media}
                        alt=""
                        class="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns=""
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      />
                    </a>
                    <div class="card-body">
                      <h3>{element.clean_url}</h3>
                      <p class="card-text">{element.title}</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">
                          {element.published_date.slice(0, 10)}
                        </small>
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
