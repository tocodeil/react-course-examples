import React from 'react';
import PropTypes from 'prop-types';

class TimeConvertor extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time: { hours: "" , min: "" , sec: ""}};
      }

      convert (e,type) {
       
        if(type === 'hr'){
          this.setState({ time: { hours: e.target.value , min:  e.target.value * 60 , sec: e.target.value * 60 * 60}  });
         }

         if(type === 'min'){
          this.setState({ time: { hours: e.target.value / 60 , min:  e.target.value  , sec: e.target.value * 60 }  });
         }

         if(type == 'sec'){
          this.setState({ time: { hours: e.target.value / 60 / 60 , min:  e.target.value /60 , sec: e.target.value  }  });
         }
      }

      render() {
        return (<div>
            Hours <input  onChange={(e,type) => this.convert(e,"hr")} value={this.state.time.hours} /> <p></p>
            Minutes <input  onChange={(e,type) => this.convert(e,"min")} value={this.state.time.min} />  <p></p>
            Seconds <input  onChange={(e,type) => this.convert(e,"sec")} value={this.state.time.sec} />  <p></p>
          </div>);
      }

}

export default TimeConvertor;