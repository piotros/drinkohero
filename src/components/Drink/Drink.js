import React, {Component} from 'react';
import {Paper} from "material-ui";
import './style.css';

class Drink extends Component {
    render() {
        return (
            <Paper className="drink-container">
                <h3>Nazwa drinka</h3>
                <p>Składniki: <i>pierwszy, drugi, trzeci</i></p>
            </Paper>
        )
    }
}
export default Drink;