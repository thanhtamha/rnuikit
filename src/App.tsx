import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import {
	SafeAreaProvider,
	initialWindowMetrics,
} from 'react-native-safe-area-context';

import { UIKitProvider, lightUI, darkUI } from './components';
import { Components } from './components/demo';

const appColors = {
	light: {
		...lightUI,
		primary: '#087ea4',
		secondary: '#5e687e',

		text: '#404756',
		foreground: '#f6f7f9',
	},
	dark: {
		...darkUI,
		primary: '#087ea4',

		background: 'rgb(28, 28, 28)',
		// foreground: 'rgb(37, 39, 40)',
		// surface: 'rgb(52, 52, 52)',
		// elevated: 'rgb(52, 52, 52)',
	},
};

export default function App(): React.JSX.Element {
	const isWeb = Platform.OS === 'web';

	useEffect(() => {
		console.log('App Create. xxxxxxxx');
		if (isWeb) {
			document.title = 'UIKit demo';
		}

		return () => {
			console.log('App Close. xxxxxxxx');
		};
	}, []);

	// To put in .env file
	const options = {
		uikitKey: '',
		enableObscured: true,
	};

	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<UIKitProvider configs={options} appColors={appColors}>
				<Components />
				{/* <AppNavigator /> */}
			</UIKitProvider>
		</SafeAreaProvider>
	);
}
