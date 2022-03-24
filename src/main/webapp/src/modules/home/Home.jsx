import React from 'react';
import Header from "../../components/Header";
import TweetBox from "./TweetBox";
import Posts from "./post/Posts";


const Home = () => {

    return (
        <>
            <Header title="Home" />
            <TweetBox />
            <Posts />
        </>
    );
};

export default Home;

