import styled from "styled-components"

const TimerWrapper = styled.div`
	background: black;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 95vh;
`
const TimerDigit = styled.div`
	color: #17D4FE;
	font-size: 60px;
	font-family: 'Lato', sans-serif;
	letter-spacing: 7px;
`
const Dot = styled.div`
	color: #17D4FE;
	margin-right: 20px;
	margin-left: 20px;
	font-size: 40px;
	padding-bottom: 10px;
`
export {
	TimerWrapper,
	TimerDigit,
	Dot
}