import React, {Component} from 'react';
import Drinks from "../components/Drinks/Drinks";

class DrinkList extends Component {
    render() {
        return (
            <div className="drink-list">
                <Drinks />
            </div>
        )
    }
}

export default DrinkList;