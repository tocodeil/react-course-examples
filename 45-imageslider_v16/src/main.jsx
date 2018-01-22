import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

class ContentSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 0 };
  }

  setActiveItem(index) {
    this.setState(oldState => ({activeItem: index}));
  }

  render() {
    var childrenCount = React.Children.count(this.props.children);
    var newChildren = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, { className: "simple-slider__slider-item"});
    });
    var innerStyle = {
      width: (childrenCount * 200) + "px",
      left: (this.state.activeItem * 200 * -1) + "px"
    };

    return <div>
      <div className="simple-slider__slider-outer" >
        <div className="simple-slider__slider-inner" style={innerStyle} >
          {newChildren}
        </div>
      </div>
        <div className="pager">
            {_.map(this.props.children, function(item,index) {
             return <button onClick={this.setActiveItem.bind(this,index)}>{index}</button>
            }, this)}
        </div>        
      </div>
  }

}

class App extends React.Component {
  render() {
    return (
      <ContentSlider>
        <img src="https://pbs.twimg.com/media/CBgCOOQW8AA3OCq.png" />
        <img src="https://pbs.twimg.com/media/CINXyYQWwAA_hlT.jpg" />
        <img src="https://updatesfromthefield.files.wordpress.com/2010/12/lolcat2.jpg" />
        <p>Just remember that death is not the end</p>
      </ContentSlider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('main'));


