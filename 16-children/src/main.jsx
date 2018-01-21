import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './gallery';
import Randomizer from './randomizer';

export default class App extends React.Component {
  render() {
    const kittenUrl = "https://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13258993_1199987493353545_1773340164_n.jpg?ig_cache_key=MTI1OTU5NTM4MTY5MzY5ODExNw%3D%3D.2";

    return (
      <div>
        <Randomizer>
          <p>One</p>
          <p>Two</p>
          <p>Three</p>
          <p>Four</p>
        </Randomizer>

        <Gallery>
          <img src={kittenUrl} />
          <img src={kittenUrl} />
          <img src={kittenUrl} />
        </Gallery>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('main'));


