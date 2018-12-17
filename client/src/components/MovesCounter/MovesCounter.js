import React from 'react';

import './../InfoWidget/InfoWidget.scss';

export default class MovesCounter extends React.Component {
    render() {
        return(
            <div className="info-widget">
                <div className="info-widget__icon"><svg className="icon icon--before" width="30" height="30" aria-hidden="true" focusable="false"><use xlinkHref="#icon-moves"></use></svg></div>
                <div className="info-widget__value">{this.props.moves}</div>
            </div>
        )
    }
}
