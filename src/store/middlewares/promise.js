const promise = store => next => action => {
    if (typeof action.payload === 'object' && typeof action.payload.then === 'function') {
        action.payload
            .then(data => {
                store.dispatch({...action, payload: data})
            })

        return
    }

    return next(action)
}

export default promise