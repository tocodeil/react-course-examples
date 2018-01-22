export const symbols = {
  newGame: '@@xogame/newGame',
  play: '@@xogame/play',
};

export function play(i, j) {
  return {
    type: symbols.play,
    payload: { i: i, j: j },
  };
}

export function newGame(p1, p2) {
  return {
    type: symbols.newGame,
    payload: { p1Name: p1, p2Name: p2 },
  };
}

