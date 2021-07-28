import React from 'react';
import Row from './components/row';
import Banner from './components/banner';
import Nav from './components/nav';
import requests from './request';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Banner/>
        <Row
          title='NETFLIX ORIGINALS'
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}/>
        <Row
          title='Trending Now'
          fetchUrl={requests.fetchTrending}/>
        <Row
          title='Top Rated'
          fetchUrl={requests.fetchTopRated}/>
        <Row
          title='Action Movies'
          fetchUrl={requests.fetchActionMovies}/>
        <Row
          title='Comedy Movies'
          fetchUrl={requests.fetchComedyMovies}/>
        <Row
          title='Horror Movies'
          fetchUrl={requests.fetchHorrorMovies}/>
        <Row
          title='Romance Movies'
          fetchUrl={requests.fetchRomanceMovies}/>
        <Row
          title='Documentaries'
          fetchUrl={requests.fetchDocumentaries}/>
      </div>
    );
  }
}

export default App;
