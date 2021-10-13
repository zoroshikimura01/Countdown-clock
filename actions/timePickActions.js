import { TIME_SELECTED } from "../constants/timer"

const timePick = (value) => ({
	type: TIME_SELECTED,
	payload: value
})


export {
	timePick
}