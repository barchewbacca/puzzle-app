import React from 'react';

import './../InfoWidget/InfoWidget.scss';

export default class TimeCounter extends React.Component {
    format(time) {
        const pad = (time, length) => {
            while (time.length < length) {
                time = '0' + time;
            }
            return time;
        }

        time = new Date(time);
        let m = pad(time.getMinutes().toString(), 2);
        let s = pad(time.getSeconds().toString(), 2);

        return `${m}:${s}`;
    }

    render() {
        return(
            <div className="info-widget">
                <div className="info-widget__icon"><svg className="icon icon--before" width="30" height="30" aria-hidden="true" focusable="false"><use xlinkHref="#icon-time"></use></svg></div>
                <div className="info-widget__value">{this.format(this.props.timer.time)}</div>
            </div>
        )
    }
}
