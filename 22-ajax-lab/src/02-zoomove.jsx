/**
 * Lab 02:
 *
 * Implmenet a wrapper React component around zoomove jQuery plugin
 *
 * Zoomove url:
 * http://emersonthompson.com.br/zoomove/
 */

import React from 'react';
import $ from 'jquery';
import {} from 'zoomove/dist/zoomove.min';

export default class ReactZooMove extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.refs.zooItem.setAttribute("data-zoo-image",this.props.zoomableImage);
        $(this.refs.zooItem).ZooMove();
    }

    render() {
        return (<div>
            <div ref="zooItem" className="zoo-item"></div>
        </div>);
    }
};

ReactZooMove.propTypes = {
    zoomableImage: React.PropTypes.string.isRequired,
};

