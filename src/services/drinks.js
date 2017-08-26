import {customFetch} from './fetch'
import {attachDrinks} from '../store/data/drinks/action'

export const getDrinks = () => {
    return (dispatch, getState) => {
        const {data} = getState().drinks

        if (data) {
            return
        }

        customFetch('http://www.json-generator.com/api/json/get/clIohxHNsO?indent=2')
            .then(response => response.json())
            .then(data => {
                dispatch(attachDrinks(data))
            })
    }
}