import React from "react";
import { StyledStartButton } from "./Styles/StyledStartButton";
const StartButton = ({ callback }) => {
	return <StyledStartButton onClick={callback}>Start Game</StyledStartButton>;
};

export default StartButton;
