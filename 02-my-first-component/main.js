"use strict";

class HelloWorld extends React.Component {
  render() {
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
}

HelloWorld.displayName = 'HelloWorld';

class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(HelloWorld, null),
      React.createElement(HelloWorld, null),
      React.createElement(HelloWorld, null),
      React.createElement(HelloWorld, null)
    );
  }
}

App.displayName = 'App';

ReactDOM.render(React.createElement(App), document.querySelector('main'));
