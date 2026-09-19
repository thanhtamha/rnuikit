import React, { Fragment, useState } from 'react';
import { Platform, ScrollView, View, Text } from 'react-native';

import { UIs } from './UIs';
import { Forms } from './Forms';

import { Icon } from '..';
import { useUIKit } from 'uikit';
import {
	Header,
	Toast,
	BottomSheet,
	Button,
	VStack,
	HStack,
	ButtonGroup,
} from 'uikit';

// BO - START
// import { HtmlView, ImageView, InfoView } from '..';

export const Components = () => {
	const { colors } = useUIKit();
	const { theme, setTheme, toggleTheme } = useUIKit();

	const [showToast, setShowToast] = useState(false);
	const [bsOpen, setBSOpen] = React.useState(false);

	const [selectedView, setSelectedView] = useState('option1');
	const btnOptions = [
		{ code: 'option1', label: 'UIs' },
		{ code: 'option2', label: 'Forms' },
		{ code: 'option3', label: 'Libs *', disabled: true },
		// { code: 'option4', label: 'BOs', disabled: false },
	];

	return (
		<Fragment>
			<Header
				title='Header'
				textAlign='left'
				style={{ backgroundColor: colors.primary }}
				textStyle={{ padding: 10, color: colors.text_primary }}
				viewLeft={
					<View style={{ flexDirection: 'row', gap: 10 }}>
						<Icon name='notes' size={24} color={colors.text_primary} />
						<Icon name='mail' size={24} color={colors.text_primary} />
					</View>
				}
				viewRight={
					<View style={{ flexDirection: 'row', gap: 10 }}>
						<Icon name='person' size={22} color={colors.text_primary} />
						<Icon name='notifications' size={22} color={colors.text_primary} />
						<Icon name='logout' size={22} color={colors.text_primary} />
					</View>
				}
				elevated={false}
				sticky={false}
			/>

			<ScrollView
				style={{
					flexGrow: 1,
					backgroundColor: colors.background,
					paddingHorizontal: 10,
					paddingBottom: 100,
				}}
			>
				<Text
					style={{
						marginTop: 10,
						color: colors.text,
						fontSize: 17,
						textAlign: 'center',
					}}
				>
					Components
				</Text>
				<Text
					style={{
						color: colors.text,
						textAlign: 'center',
						marginBottom: 15,
					}}
				>
					UIKit includes UIs and Forms (Libs required 3rd party library)
				</Text>

				<ButtonGroup
					options={btnOptions}
					selected={selectedView}
					onSelect={setSelectedView}
					disabled={false}
					outline={true}
					style={{ marginBottom: 10 }}
					textStyle={{}}
				/>

				{selectedView === 'option1' && (
					<Fragment>
						<UIs />

						<VStack align='center' style={{ marginBottom: 150 }}>
							<Button
								title='Open Bottom Sheet'
								onPress={() => setBSOpen(true)}
							/>
							<Button
								title='Show Toast'
								onPress={() => setShowToast(true)}
								size='sm'
							/>
						</VStack>
					</Fragment>
				)}
				{selectedView === 'option2' && <Forms />}
			</ScrollView>

			<Toast
				visible={showToast}
				// message='This is a toast message!'
				message={
					<HStack style={{ justifyContent: 'space-between' }}>
						<Text style={{ color: colors.text_primary }}>HStack Left</Text>
						<Text style={{ color: colors.text_primary }}>HStack Right</Text>
					</HStack>
				}
				onHide={() => setShowToast(false)}
				duration={5000}
				position='bottom'
				style={{ marginVertical: 60 }}
			/>

			<BottomSheet
				visible={bsOpen}
				onClose={() => setBSOpen(false)}
				height={400}
				dragable={true}
				style={{}}
			>
				<Text style={{ color: colors.text }}>
					This is a working Bottom Sheet on Web 🎉
				</Text>
				<Button title='Close' onPress={() => setBSOpen(false)} />
			</BottomSheet>
		</Fragment>
	);
};
