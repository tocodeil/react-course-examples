var TimeConverter = React.createClass({
    getInitialState: function() {
        return {
            hours : 1,
            minutes : 60,
            seconds : 3600
        };
    },
    render: function() {
        return (
            <div>
                <h6>Hours</h6>
                <input type="text" value={this.state.seconds / 3600} onChange={this.handleChange.bind(this, 'hours')} />
                <br/>
                <h6>Minutes</h6>
                <input type="text" value={this.state.seconds / 60} onChange={this.handleChange.bind(this, 'minutes')} />
                <br/>
                <h6>Seconds</h6>
                <input type="text" value={this.state.seconds} onChange={this.handleChange.bind(this, 'seconds')} />
                <br/>
            </div>
        );
    },
    handleChange: function (name, e) {
        var change = {};
        change[name] = e.target.value;
        this.setState(change);
    }
});

ReactDOM.render(<TimeConverter/>, document.querySelector('main'));