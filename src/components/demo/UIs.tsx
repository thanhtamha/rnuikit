import React, { Fragment, useState } from 'react';
import { Platform, View, Text } from 'react-native';

// UIKit - START
import { BottomSheet, Droplist, Button, ButtonGroup, Card } from 'uikit';
import { Collapsible, Accordion, DataTable } from 'uikit';
import { Dialog, AlertDialog, ActionDialog } from 'uikit';
import { Dropdown, DropdownItem } from 'uikit';

import {
	Checkbox,
	CheckboxGroup,
	Input,
	InputGroup,
	InputLayout,
	type StyleType,
	Radio,
	Select,
	type SelectType,
	SelectView,
} from 'uikit';

import { Header, usePrivacyObscure, useResponsive, IdleWatcher } from 'uikit';

import { GridLayout, HStack, VStack, AStack } from 'uikit';

import {
	Link,
	OTPInput,
	type OTPInputRef,
	Pagination,
	ResponsiveView,
	SlideButton,
	SlidingTab,
	Spinner,
	Loader,
	Switch,
	Toast,
	Touchable,
} from 'uikit';

import {
	useBottomSheet,
	UIKitContext,
	UIKitProvider,
	useUIKit,
	lightUI,
	darkUI,
} from 'uikit';

// UIKit - END


import { Icon } from '..';
// Libs - END

export const UIs = () => {
	const { colors } = useUIKit();
	const { theme, setTheme, toggleTheme } = useUIKit();

	// UI Part
	const [droplistOpen, setDroplistOpen] = React.useState(false);

	const [isOutline, setOutline] = useState(false);

	const [selectedButton, setSelectedButton] = useState('option1');
	const btnOptions = [
		{ code: 'option1', label: 'Option 1' },
		{ code: 'option2', label: 'Option 2' },
		{ code: 'option3', label: 'Option 3' },
	];

	const [isOpen, setOpen] = useState(false);
	const sections = [
		{
			title: 'Section 1',
			content: (
				<Text style={{ color: colors.text }}>
					This is the content of Section 1.
				</Text>
			),
		},
		{
			title: 'Section 2',
			content: (
				<Text style={{ color: colors.text }}>
					This is the content of Section 2.
				</Text>
			),
		},
		{
			title: 'Section 3',
			content: (
				<Text style={{ color: colors.text }}>
					This is the content of Section 3.
				</Text>
			),
		},
	];

	const [showDialog, setShowDialog] = useState(false);
	const [showActionDialog, setShowActionDialog] = useState(false);

	const [activeTab, setActiveTab] = useState('home');

	const [showSpinner, setShowSpinner] = useState(false);

	const ref = React.useRef<OTPInputRef>(null);
	// ref.current?.clear();
	// ref.current?.focus();
	// const otp = ref.current?.getValue();

	// <StatusBar
	// 	hidden={false}
	// 	backgroundColor={colors.foreground}
	// 	translucent={Platform.OS === 'android'}
	// 	barStyle={darkTheme ? 'dark-content' : 'light-content'}
	// 	/>

	// <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}}>
	// 	{children}
	// </SafeAreaView>

	return (
		<Fragment>
			{/* UI Part */}
			<Text
				style={{
					padding: 10,
					marginVertical: 20,
					color: colors.text,
					borderRadius: 4,
					backgroundColor: colors.foreground,
				}}
			>
				UI Part
			</Text>

			<VStack align='center' style={{ padding: 10 }}>
				<Button title='Droplist' onPress={() => setDroplistOpen(true)} />

				<Droplist
					visible={droplistOpen}
					onClose={() => setDroplistOpen(false)}
					height={350}
					dragable={Platform.OS === 'web'}
					style={{}}
				>
					<Text style={{ color: colors.text }}>
						Droplist Content - Draggable on {Platform.OS.toLocaleUpperCase()} -{' '}
						{Platform.OS === 'web' ? 'Yes' : 'No'}
					</Text>
				</Droplist>

				<Button
					title='Primary'
					onPress={() => {}}
					iconLeft={<Icon name={'mail'} />}
					iconRight={<Icon name={'mail'} />}
					style={{ borderRadius: 50 }}
				/>
				<Button
					title='Secondary'
					onPress={() => {}}
					size='sm'
					inProgress={true}
					style={{ borderRadius: 50, backgroundColor: colors.secondary }}
				/>
				<Button
					title='Border None'
					onPress={() => {}}
					size='lg'
					style={{ borderRadius: 50, backgroundColor: colors.foreground }}
					textStyle={{ color: colors.primary }}
				/>

				<Button
					title='Border Line'
					onPress={() => {}}
					iconLeft={<Icon name={'mail'} color={colors.primary} />}
					style={{
						borderWidth: 1,
						borderRadius: 50,
						borderColor: colors.primary,
						backgroundColor: colors.transparent,
					}}
					textStyle={{ color: colors.primary }}
				/>
			</VStack>

			<VStack
				gap={5}
				align='stretch'
				justify='center'
				style={{ padding: 10, alignItems: 'center' }}
			>
				<Text style={{ color: colors.text }}>
					Outline stlye - ButtonGroup, Dropdown
				</Text>
				<Switch value={isOutline} onChange={setOutline} disabled={false} />

				<Text style={{ color: colors.text }}>
					Theme - {theme === 'dark' ? 'Dark' : 'Light'}
				</Text>
				<Switch
					value={theme === 'dark'}
					onChange={toggleTheme}
					disabled={false}
				/>
			</VStack>

			<ButtonGroup
				options={btnOptions}
				selected={selectedButton}
				onSelect={setSelectedButton}
				disabled={false}
				outline={isOutline}
				style={{ marginBottom: 20 }}
				textStyle={{}}
			/>

			<Dropdown
				label='Menu'
				iconLeft={<Icon name='person' />}
				iconRight={<Icon name='keyboard-arrow-down' />}
				disabled={false}
				outline={isOutline}
				style={{ gap: 2, alignSelf: 'center' }}
				alignment={'center'}
			>
				{[
					{ cd: '1', dscp: 'Option 1' },
					{ cd: '2', dscp: 'Option 2' },
					{ cd: '3', dscp: 'Option 3' },
				].map(item => (
					<DropdownItem
						key={item.cd}
						onSelect={() => {
							// setSelected(item.cd);
							console.log('Clicked: xxx', item.dscp);
						}}
						style={{ padding: 10, borderRadius: 8 }}
					>
						<Text style={{ color: colors.text, fontSize: 15 }}>
							{item.dscp}
						</Text>
					</DropdownItem>
				))}
			</Dropdown>

			<Card title='Hello Card' style={{ margin: 10 }}>
				<Text style={{ color: colors.text }}>This is the card content.</Text>
			</Card>

			<Collapsible
				title={'Hello World'}
				isOpen={isOpen}
				onPress={() => setOpen(!isOpen)}
				iconUp={<Icon name={'keyboard-arrow-up'} />}
				iconDown={<Icon name={'keyboard-arrow-down'} />}
				style={{ marginVertical: 20 }}
			>
				<Text style={{ color: colors.text }}>
					Welcome to React Native World.
				</Text>
			</Collapsible>

			<Accordion
				sections={sections}
				iconUp={<Icon name={'keyboard-arrow-up'} />}
				iconDown={<Icon name={'keyboard-arrow-down'} />}
			/>

			<View style={{ marginVertical: 20 }}>
				<DataTable
					columns={[
						{ key: 'no', label: 'No.', minWidth: 50 },
						{
							key: 'name',
							label: 'Name',
							minWidth: 100,
							sort: true,
						},
						{ key: 'age', label: 'Age', minWidth: 80, sort: true },
						{ key: 'phone', label: 'Phone', minWidth: 150 },
						{ key: 'email', label: 'Email', minWidth: 220 },
						{ key: 'ID', label: 'ID', minWidth: 150 },
						{ key: 'job', label: 'Job', minWidth: 200 },
						{
							key: 'address',
							label: 'Address',
							minWidth: 200,
							numberOfLines: 1,
						},
					]}
					data={[
						{
							no: 1,
							name: 'Alice',
							age: 28,
							phone: '0172353846',
							email: 'ttha@hitachi-ebworx.com',
							ID: '0172353846',
							job: 'ttha@hitachi-ebworx.com',
							address: 'No. 23 jalan 14/2 Section 14 Petaling Jaya',
						},
						{
							no: 2,
							name: 'Bob',
							age: 34,
							phone: '0172353846',
							email: 'hathanhtam.03@gmail.com',
							ID: '0172353846',
							job: 'ttha@hitachi-ebworx.com',
							address: 'No. 23 jalan 14/2 Section 14 Petaling Jaya',
						},
						{
							no: 3,
							name: 'Charlie',
							age: 22,
							phone: '0172353846',
							email: 'vuthuytienpham@gmail.com',
							ID: '0172353846',
							job: 'ttha@hitachi-ebworx.com',
							address: 'No. 23 jalan 14/2 Section 14 Petaling Jaya',
						},
					]}
					onSelect={row => {
						console.log('Selected :', row);
					}}
					onSortPress={column => {
						console.log('Sorted :', column);
					}}
					iconSort={<Icon name={'sort'} color='white' size={18} />}
					tableStyle={{ marginTop: 10 }}
					headerStyle={{}}
					textStyle={{}}
				/>
			</View>

			<VStack align='center' style={{ padding: 10 }}>
				<Button
					title='Alert Dialog'
					onPress={() => setShowDialog(true)}
					size='sm'
				/>
				<Button
					title='Action Dialog'
					onPress={() => setShowActionDialog(true)}
					size='md'
				/>

				<AlertDialog
					title='Errors'
					visible={showDialog}
					onClose={() => setShowDialog(false)}
					icon={<Icon name='error' size={22} />}
				>
					<Text style={{ fontSize: 15, color: colors.text }}>
						There is an error information
					</Text>
				</AlertDialog>

				<ActionDialog
					title='Confirm Action'
					visible={showActionDialog}
					icon={<Icon name='warning' size={22} />}
					iconClose={
						<Icon
							name='close'
							size={24}
							onPress={() => setShowActionDialog(false)}
						/>
					}
					cancelText='Reject'
					onCancel={() => {
						console.log('Cancel');
						setShowActionDialog(false);
					}}
					confirmText='Approve'
					onConfirm={() => {
						console.log('Confirmed');
						setShowActionDialog(false);
						console.log('fcmToken -> ', {});
					}}
				>
					<Text style={{ fontSize: 15, color: colors.text }}>
						Are you sure you want to proceed?
					</Text>
				</ActionDialog>
			</VStack>

			<Text
				style={{
					padding: 10,
					marginTop: 10,
					color: colors.text,
					backgroundColor: colors.foreground,
				}}
			>
				Grid Layout
			</Text>

			<GridLayout
				columns={{ mobile: 1, tablet: 3, desktop: 4 }}
				style={{ marginVertical: 10 }}
				itemStyle={{}}
			>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						backgroundColor: 'lightgray',
					}}
				>
					<Text style={{ color: colors.text }}>Section 1</Text>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						backgroundColor: 'skyblue',
					}}
				>
					<Text style={{ color: colors.text }}>Section 2</Text>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						backgroundColor: 'lightgray',
					}}
				>
					<Text style={{ color: colors.text }}>Section 3</Text>
				</View>
				<View
					style={{
						flex: 1,
						alignItems: 'center',
						backgroundColor: 'skyblue',
					}}
				>
					<Text style={{ color: colors.text }}>Section 4</Text>
				</View>
			</GridLayout>

			<HStack
				onLayout={e => {
					const width = e.nativeEvent.layout.width;
					// setTabWidths(prev => {
					// 	const updated = [...prev];
					// 	updated[index] = width;
					// 	return updated;
					// });
				}}
				style={{ justifyContent: 'space-evenly', marginVertical: 20 }}
			>
				<Text style={{ color: colors.text }}>HStack Left</Text>

				<VStack>
					<Text style={{ color: colors.text }}>VStack Top Right</Text>
					<Text style={{ color: colors.text }}>VStack Bottom Right</Text>
				</VStack>
			</HStack>

			<Link
				text={"Don't have account yet ?"}
				onPress={() => {}}
				style={{ marginVertical: 5 }}
				disabled={false}
			/>

			<OTPInput
				ref={ref}
				length={6}
				editable={true}
				secureText={true}
				onComplete={otp => {
					console.log('otp ', otp);
				}}
				style={{ marginVertical: 20 }}
			/>

			<Pagination
				pageNo={2}
				totalPage={4}
				goPrevious={<Icon name='chevron-left' size={30} onPress={() => {}} />}
				goNext={<Icon name='chevron-right' size={30} onPress={() => {}} />}
			/>

			<Text
				style={{
					padding: 10,
					marginTop: 10,
					color: colors.text,
					backgroundColor: colors.foreground,
				}}
			>
				Responsive View (View component to visible / hiddle on screen size)
			</Text>

			<ResponsiveView visible={['xs', 'sm']} style={{ margin: 10 }}>
				<Text style={{ color: colors.text }}>
					This is only visible on mobile
				</Text>
			</ResponsiveView>

			<ResponsiveView visible={['lg', 'xl']} style={{ margin: 10 }}>
				<Text style={{ color: colors.text }}>
					This is visible on large screens
				</Text>
			</ResponsiveView>

			<SlideButton
				text='Slide to confirm'
				// width={402}
				// height={64}
				// thumbSize={56}
				iconArrow={
					<Icon size={30} name={'chevron-right'} color={colors.text_primary} />
				}
				resetAfterComplete={false}
				onComplete={() => {
					console.log('SlideButton Confirmed!');
				}}
				style={{ marginVertical: 20 }}
			/>

			<SlidingTab
				tabs={[
					{ key: 'home', label: 'Home', icon: <Icon name={'mail'} /> },
					{ key: 'explore', label: 'Explore' },
					{ key: 'profile', label: 'Profile' },
					{ key: 'setting', label: 'Setting' },
					{ key: 'news', label: 'News' },
					{ key: 'progress', label: 'Progress' },
				]}
				activeKey={activeTab}
				onChange={key => setActiveTab(key)}
				style={{ backgroundColor: colors.foreground, marginVertical: 20 }}
			/>

			<View
				style={{
					flex: 1,
					alignItems: 'center',
					paddingBottom: 20,
				}}
			>
				<Button
					title='Show Loader'
					onPress={() => setShowSpinner(true)}
					size='sm'
				/>

				<Loader
					visible={showSpinner}
					onClose={() => setShowSpinner(false)}
					loadText={'Loading'}
					color={colors.primary}
					size='large'
					style={{}}
				/>

				<Spinner color={colors.primary} size='large' style={{ margin: 10 }} />

				<Touchable
					disabled={false}
					onPress={() => {
						console.log('Touchable View');
					}}
					style={{
						padding: 10,
						borderRadius: 8,
						marginVertical: 20,
						backgroundColor: colors.primary,
					}}
				>
					<Text style={{ color: colors.text_primary }}>Touchable View</Text>
				</Touchable>
			</View>
		</Fragment>
	);
};
