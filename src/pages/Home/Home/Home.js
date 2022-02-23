import React from 'react';
import Categories from '../Categories/Categories';

import HomeTopSection from '../HomeTopSection/HomeTopSection';
import TrendingClothes from '../TrendingClothes/TrendingClothes';

const Home = () => {
    return (
        <>
            <HomeTopSection></HomeTopSection>
            <TrendingClothes></TrendingClothes>
            <Categories></Categories>
        </>
    );
};

export default Home;