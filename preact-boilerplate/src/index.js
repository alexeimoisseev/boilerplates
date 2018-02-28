import {h, render, Component} from 'preact';

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
