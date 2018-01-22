export const symbols = {
  addMessage: '@@chat/addMessage',
  resetMessages: '@@chat/resetMessages',
  loadError: '@@chat/loadError',
};

export function addMessage(text) {
  return function(dispatch, getstate) {
    dispatch({ type: symbols.addMessage, payload: text });

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/items');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', function() {
    });

    xhr.send(JSON.stringify({ text: text }));
  }
}

export function refreshMessages() {
  return function(dispatch, getstate) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/items');
    xhr.addEventListener('load', function() {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText);
        dispatch({ type: symbols.resetMessages, payload: res.messages });
      } else {
        dispatch({ type: symbols.loadError });
      }
    });

    xhr.send();
  }
}










