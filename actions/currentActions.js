
export function updateCurrentPoints(points) {
	return async (dispatch) => {
		dispatch({type:"UPDATE_CURRENT_POINTS", payload: points})
	}
}
