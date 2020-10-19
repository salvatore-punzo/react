import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY ="AIzaSyAP3Kg4a7ilq9bvEWqoSIES8Dv_9sR78So";



class App extends React.Component {
    onTermSubmit = term => {
        youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            maxResults: 5,
            key: KEY
          }
        });
      };
    render() {
        return (
            <div className="ui container"> 
                <SearchBar onFormSubmit = {this.onTermSubmit}/>
            </div>
    );
    }
}

export default App;