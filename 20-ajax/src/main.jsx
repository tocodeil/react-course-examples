import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [
        {
          Title: "Fargo",
          Year: "1996",
          imdbID: "tt0116282",
          Type: "movie",
          Poster: "http://ia.media-imdb.com/images/M/MV5BMTgxNzY3MzUxOV5BMl5BanBnXkFtZTcwMDA0NjMyNA@@._V1_SX300.jpg"
        }
      ],
      search: ''
    };
  }

  search = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://omdbapi.com/?apikey=4bc20e4a&s=' + this.state.search);
    xhr.addEventListener('load', () => {
      const results = JSON.parse(xhr.responseText).Search;      
      this.setState(oldState => ({results: results }));
    });
    xhr.send();
  };

  setSearchText = (e) => {
    const text = e.target.value;
    this.setState(oldState => ({ search: text }));
  };

  render() {
    return <div>
      <input 
        type="text" 
        onChange={this.setSearchText} />
      
      <button onClick={this.search}>Search</button>
      
      <ul>
        {this.state.results.map((item) => (
          <li key={item.imdbID}>
            <a href={"http://www.imdb.com/title/" + item.imdbID} target="_blank">
            {item.Title} ({item.Year})
            </a>
          </li>
        ))}
      </ul>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('main'));

