import React from 'react';
import { useUIKit } from 'uikit';

// @ts-ignore
import Icons from 'react-native-vector-icons/MaterialIcons';
// https://fonts.google.com/icons?selected=Material+Icons
// https://oblador.github.io/react-native-vector-icons/

interface IconProps {
	name: string;
	size?: number;
	color?: string;
	onPress?: () => void;
}

export const Icon: React.FC<IconProps> = ({ name, size, color, onPress }) => {
	const { colors } = useUIKit();
	return (
		<Icons
			name={name}
			onPress={onPress}
			size={size ? size : 20}
			color={color ? color : colors.muted}
		/>
	);
};
