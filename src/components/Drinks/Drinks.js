import React, {Component} from 'react'
import Drink from '../Drink'
import {connect} from 'react-redux'
import {getDrinks} from "../../services/drinks"
import './style.css'

class Drinks extends Component {
    componentDidMount() {
        this.props.getDrinks()
    }

    render() {
        const {data} = this.props

        return (
            <div className="drinks">
                {
                    data
                        ?
                        data
                            .map(drink => <Drink key={drink._id} drink={drink} />)
                        :
                        null
                }
            </div>
        )

    }
}

const mapStatesToProps = state => {
    const {data} = state.drinks

    return {
        data
    }
}

const mapDispatchToProps = {
    getDrinks
}

export default connect(mapStatesToProps, mapDispatchToProps)(Drinks)