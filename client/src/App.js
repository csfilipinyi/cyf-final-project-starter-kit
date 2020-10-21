import React from "react";
import Routes from "./Routes";
import ProfileState from './context/ProfileContext';
import AuthState from './context/AuthContext'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { theme } from "./styles/Theme";

const App = () => {
	return (
		<AuthState>		
			<ProfileState>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Routes />
				</ThemeProvider>
			</ProfileState>
		</AuthState>
	);
};

export default App;
