import React, {Component} from 'react';
import {render} from 'react-dom';

class Button extends Component {
    render() {
        return (
            <div className="Button">
                I am button
            </div>
        );
    }
}

render(<Button />, document.body);
