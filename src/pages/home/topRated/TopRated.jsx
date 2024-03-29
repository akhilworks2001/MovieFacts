import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';

import './topRated.scss';

import Carousel from '../../../components/carousel/Carousel';

export default function TopRated() {
    const [endpoint, setEndPoint] = useState("movie");

    const {data, loading} = useFetch(`/${endpoint}/top_rated`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
        console.log(data);
    }

  return (
      <div className="carouselSection">
          <ContentWrapper>
              <div className="carouselWrapper">
              <span className="carouselTitle">Top Rated</span>
              <SwitchTabs data={["Movies", "TV shows"]} onTabChange={onTabChange} />
              </div>
          </ContentWrapper>
          <Carousel 
            data={data?.results} 
            loading={loading}
             endpoint={endpoint}
            />
      </div>
  )
}
