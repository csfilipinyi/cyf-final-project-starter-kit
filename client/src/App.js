import React from "react";
import Routes from "./Routes";
import ProfileState from './context/ProfileContext';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { theme } from "./styles/Theme";

const App = () => {
	return (
		<ProfileState>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
		  		<Routes />
	 		</ThemeProvider>
		</ProfileState>
	);
};

export default App;
