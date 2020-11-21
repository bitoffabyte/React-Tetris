import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0);
	background-size: cover;
	overflow: hidden;
	z-index: 100;
	@media (max-width: 1000px) {
		display: none;
	}
`;

export const StyledTetris = styled.div`
	display: flex;
	align-items: flex-start;
	z-index: 100;

	padding: 40px;
	margin: 0 auto;
	max-width: 900px;
	padding-left: 17vw;
	background: white;

	aside {
		width: 100%;
		max-width: 200px;
		display: block;
		padding: 0 20px;
		z-index: 100;

		@media (max-width: 1500px) {
			padding-left: 300px;
		}
	}
`;
