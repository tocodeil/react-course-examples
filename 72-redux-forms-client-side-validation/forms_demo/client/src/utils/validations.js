export function required(value, allValues, props) {
  if (!value) {
    return 'Required';
  }
}

export function email(value, allValues, props) {
  if (!value.match(/^[\w.]+@[\w.]+$/)) {
    return 'Email Expected';
  }
}

export function gmail(value, allValues, props) {
  if (!email || !value.match(/@gmail\.com$/)) {
    return 'Gmail address expected';
  }
}
