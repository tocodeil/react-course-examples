"use strict";

var HelloWorld = React.createClass({
  displayName: "HelloWorld",
  render: function render() {
    return React.createElement(
      "div",
      { className: "hello-world" },
      React.createElement(
        "p",
        null,
        "Hello ",
        1 + 1,
        " World"
      )
    );
  }
});

var App = React.createClass({
  displayName: "App",
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(HelloWorld, null),
      React.createElement(HelloWorld, null),
      React.createElement(HelloWorld, null),
      React.createElement(HelloWorld, null)
    );
  }
});

ReactDOM.render(React.createElement(App), document.querySelector('main'));
