import React from 'react';

class TimeConvertor extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Hours : "", Minutes : "" , Seconds : ""};
      }

      convert = (e) => {
        if(e.target.id == 'hours'){
            this.setState({ Hours: e.target.value  });
            this.setState({ Minutes: e.target.value * 60 });
            this.setState({ Seconds: e.target.value * 60 * 60 });
         }

         if(e.target.id == 'min'){
            this.setState({ Hours: e.target.value / 60  });
            this.setState({ Minutes: e.target.value });
            this.setState({ Seconds: e.target.value * 60  });
         }

         if(e.target.id == 'sec'){
            this.setState({ Hours: e.target.value /60 / 60 });
            this.setState({ Minutes: e.target.value / 60 });
            this.setState({ Seconds: e.target.value  });
         }
      }

      render() {
        return (<div>
            Hours <input id="hours" onChange={this.convert} value={this.state.Hours} /> <p></p>
            Minutes <input id="min" onChange={this.convert} value={this.state.Minutes} />  <p></p>
            Seconds <input id ="sec" onChange={this.convert} value={this.state.Seconds} />  <p></p>
          </div>);
      }

}

export default TimeConvertor;