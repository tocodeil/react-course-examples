/**
 * Lab 02: CPS monitor with indicator
 *
 * Add an indicator panel to the CPS monitor
 * that shows a green rectangle if user clicks fast enough
 * or a red rectangle if user clicks too slow
 *
 * Decide how to share information between the components
 * and what values to pass when creating the Indicator
 */

import React from 'react';

class Indicator extends React.Component {
}

export default class CpsWithIndicator extends React.Component {
  render() {
    return (
      <div>
        <button>Click Fast</button>
        <p>CPS rate: {0}</p>
        <Indicator />
      </div>
    );
  }
}

