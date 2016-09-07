export const symbols = {
  addMessage: '@@chat/addMessage',
};

export function addMessage(text) {
  return {
    type: symbols.addMessage,
    payload: text,
  };
}

