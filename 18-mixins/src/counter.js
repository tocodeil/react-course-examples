function Counter(delta) {
  return {
    getInitialState: function() {
      return { count: 0 };
    },

    inc: function() {
      this.setState({count: this.state.count+delta});
    }
  };
}

export default Counter;

