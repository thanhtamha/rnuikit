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
	useToast,
	UIKitContext,
	UIKitProvider,
	useUIKit,
	lightUI,
	darkUI,
} from 'uikit';

// UIKit - END

// Libs - START
// import { DatePicker, DateSelect } from '..';
// import { FormCheckbox, FormDateSelect } from '..';
// import { FormInput, FormRadio, FormSelect } from '..';

import { Icon } from '..';
// Libs - END

// import { Search } from '../../modules/common/Search';

export const Forms = () => {
	const { colors } = useUIKit();
	const { theme, setTheme, toggleTheme } = useUIKit();

	// Form Part
	const { open, close } = useBottomSheet();
	const openSheet = () => {
		open({
			height: 400,
			dragable: true,
			content: (
				<Fragment>
					<Text style={{ color: colors.text }}>Global Sheet 🎉</Text>
					<Button title='Close' onPress={close} />
				</Fragment>
			),
			// style: { backgroundColor: colors.background },
		});
	};

	const { show, hide } = useToast();
	const showToast = () => {
		show({
			duration: 4000,
			position: 'center',
			content: (
				<Fragment>
					<Text style={{ color: colors.text }}>Global Toast 🎉</Text>
					<Button title='Hide' onPress={hide} />
				</Fragment>
			),
			style: { backgroundColor: colors.background },
		});
	};

	const [isChecked, setChecked] = useState(false);
	const [display, setDisplay] = useState(false);

	const [checkedItems, setCheckedItems] = useState<string[]>([]);

	const [choose, setChoose] = useState('option1');

	const [selectedCurrency, setSelectedCurrency] = useState('MYR');
	const [amount, setAmount] = useState('');
	const formatMoney = (value: string, decimal: number = 2) => {
		// digits and the decimal point
		let allowChars = value.replace(/[^0-9.]/g, '');

		// Split by first dot only
		const [integerPart, decimalRaw] = allowChars.split('.');

		// Format integer part with commas
		const formattedInt = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		if (decimal > 0) {
			// decimal digits
			const decimalPart = decimalRaw?.slice(0, decimal);
			return decimalPart !== undefined
				? `${formattedInt}.${decimalPart}`
				: formattedInt;
		} else {
			return formattedInt;
		}
	};

	const [selected, setSelected] = useState('');

	const [searchItem, setSearchItem] = useState('');

	const [styleType, setStyleType] = useState('');
	const styleOption = [
		{ code: '', label: 'Default' },
		{ code: 'outline', label: 'Outline' },
		{ code: 'material', label: 'Material' },
	];

	const [selectType, setSelectType] = useState('dialog');
	const selectTypeOption = [
		{ code: 'dialog', label: 'Dialog' },
		{ code: 'dropdown', label: 'Dropdown' },
		{ code: 'droplist', label: 'Droplist' },
	];

	// Other
	const dateFormat = 'DD-MM-YYYY';
	const [selectedDate, setSelectedDate] = useState('');

	return (
		<Fragment>
			{/* Form Part */}
			<Text
				style={{
					padding: 10,
					marginVertical: 20,
					color: colors.text,
					borderRadius: 4,
					backgroundColor: colors.foreground,
				}}
			>
				Form Part
			</Text>

			<Checkbox
				label='Accept terms and conditions'
				onChange={() => setChecked(!isChecked)}
				checked={isChecked}
				iconCheck={<Icon name='check' color={colors.background} />}
				disabled={false}
				style={{ marginHorizontal: 20, marginBottom: 20 }}
				textStyle={{}}
			/>

			<View style={{ marginBottom: 20 }}>
				<Text style={{ color: colors.text, textAlign: 'center' }}>
					Checkbox / Radiobox
				</Text>
				<HStack style={{ justifyContent: 'center' }}>
					<Text style={{ color: colors.text }}>
						Display - {display ? 'Column' : 'Row'}
					</Text>
					<Switch value={display} onChange={setDisplay} />
				</HStack>
			</View>

			<CheckboxGroup
				label='Please check (2-3 items)'
				required={false}
				error='Invalid'
				selectedValues={checkedItems}
				min={2}
				max={3}
				onChange={values => setCheckedItems(values)}
				options={[
					{ cd: 'option1', dscp: 'Option 1' },
					{ cd: 'option2', dscp: 'Option 2' },
					{ cd: 'option3', dscp: 'Option 3', disabled: true },
					{ cd: 'option4', dscp: 'Option 4' },
					{ cd: 'option5', dscp: 'Option 5' },
				]}
				iconCheck={<Icon name='check' color={colors.background} />}
				direction={display ? 'column' : 'row'}
				style={{}}
			/>

			<Radio
				label='Please choose'
				required={true}
				error='Invalid'
				selectedValue={choose}
				onSelect={setChoose}
				options={[
					{ cd: 'option1', dscp: 'Option 1' },
					{ cd: 'option2', dscp: 'Option 2' },
					{ cd: 'option3', dscp: 'Option 3', disabled: true },
					{ cd: 'option4', dscp: 'Option 4' },
					{ cd: 'option5', dscp: 'Option 5' },
				]}
				disabled={false}
				direction={display ? 'column' : 'row'}
				style={{}}
			/>

			<ButtonGroup
				options={styleOption}
				selected={styleType}
				onSelect={setStyleType}
				disabled={false}
				outline={false}
				style={{ marginBottom: 20 }}
			/>

			<Input
				label='Username'
				required={true}
				error='Username is required.'
				info={
					<Text style={{ color: colors.primary }}>
						Please enter your username.
					</Text>
				}
				// info={'Please enter your username.'}
				disabled={false}
				styleType={styleType as StyleType}
				iconLeft={<Icon name='person' />}
				iconRight={<Icon name='person' />}
				style={{}}
				placeholder='Your username'
			/>
			<Input
				label='Password'
				required={true}
				// error='Invalid password'
				styleType={styleType as StyleType}
				iconLeft={<Icon name='lock' />}
				style={{}}
				secureTextEntry
				placeholder='Your password'
			/>

			<InputGroup
				label='Search'
				required={true}
				// error='Search is required.'
				// info={'Please enter your username.'}
				styleType={styleType as StyleType}
				iconLeft={<Icon name='search' size={22} />}
				iconRight={<Icon name='clear' />}
				style={{}}
				viewLeft={
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',

							borderRadius: 8,
							borderTopRightRadius: 0,
							borderBottomRightRadius: 0,

							paddingVertical: 10,
							paddingHorizontal: 14,
							backgroundColor: colors.secondary,
						}}
					>
						<Text
							style={{
								fontSize: 15,
								fontWeight: '500',
								color: colors.text_primary,
							}}
						>
							MYR
						</Text>
					</View>
				}
				viewRight={
					<Button
						title='Go'
						onPress={() => {}}
						// iconRight={<Icon name='search' color='white' />}
						style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
					/>
				}
			/>

			<InputGroup
				label='Amount'
				required={true}
				error='Amount is required.'
				styleType={styleType as StyleType}
				// iconLeft={<Icon name='search' size={22} />}
				iconRight={<Icon name='clear' />}
				// value={amount}
				defaultValue={amount}
				onChangeText={text => {
					setAmount(formatMoney(text));
				}}
				style={{}}
				viewLeft={
					<Select
						// error='This is required.'
						selectedValue={selectedCurrency}
						onSelect={setSelectedCurrency}
						options={[
							{ cd: 'MYR', dscp: 'MYR' },
							{ cd: 'SGD', dscp: 'SGD' },
							{ cd: 'VND', dscp: 'VND' },
							{ cd: 'USD', dscp: 'USD' },
						]}
						styleType={styleType as StyleType}
						selectType={selectType as SelectType}
						iconRight={<Icon name='keyboard-arrow-down' size={22} />}
						layoutStyle={{ marginBottom: 0 }} // Override main layout
						style={{
							borderRadius: 8,
							borderTopRightRadius: 0,
							borderBottomRightRadius: 0,
							minWidth: 100,
						}}
					/>
				}
			/>

			<Input
				label={
					<View
						style={{
							gap: 5,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<Text style={{ color: colors.text }}>
							Remark <Text style={{ color: colors.error }}>*</Text>
						</Text>
						<Icon name='info' size={18} onPress={() => {}} />
					</View>
				}
				// label='Remark'
				disabled={true}
				styleType={styleType as StyleType}
				placeholder='Remark - disabled'
				multiline={true}
			/>

			<ButtonGroup
				options={selectTypeOption}
				selected={selectType}
				onSelect={setSelectType}
				disabled={false}
				outline={false}
				style={{ marginBottom: 20 }}
			/>

			{/* <SelectView
				label='Select view (child view inside i.e DatePicker)'
				required={true}
				// error='This is mandatory.'
				selectedValue={selectedDate}
				iconLeft={<Icon name='lock' />}
				iconRight={<Icon name='event' size={22} />}
				style={{}}
				styleType={styleType as StyleType}
				selectType={selectType as SelectType}
				// selectType='dropdown'
				disabled={false}
				height={350}
				droplistStyle={{}}
				dragable={Platform.OS === 'web'}
			>
				<DatePicker
					selectedDate={selectedDate}
					onSelect={setSelectedDate}
					dateFormat={dateFormat}
					minDate='01-04-2026'
					maxDate='01-04-2036'
				/>
			</SelectView> */}

			<Select
				label='Please select'
				required={false}
				// error='This is mandatory.'
				selectedValue={selected}
				onSelect={setSelected}
				options={[
					{ cd: '1', dscp: 'Option 1' },
					{ cd: '2', dscp: 'Option 2' },
					{ cd: '3', dscp: 'Option 3', disabled: true },
					{ cd: '4', dscp: 'Option 4' },
					{ cd: '5', dscp: 'Option 5' },
					{ cd: '6', dscp: 'Option 6' },
					{ cd: '7', dscp: 'Option 7' },
					{ cd: '8', dscp: 'Option 8' },
					{ cd: '9', dscp: 'Option 9', disabled: true },
				]}
				styleType={styleType as StyleType}
				selectType={selectType as SelectType}
				// selectType='droplist'
				disabled={false}
				iconLeft={<Icon name='search' size={22} />}
				iconRight={<Icon name='keyboard-arrow-down' size={26} />}
				style={{}}
				height={350}
				droplistStyle={{}}
				dragable={Platform.OS === 'web'}
				filtered={true}
			/>

			{/* <Search
				label='Please search'
				required
				// error='Invalid'
				selectedValue={searchItem}
				onSelect={value => setSearchItem(value)}
				disabled={false}
				styleType={styleType as StyleType}
				iconLeft={<Icon name='lock' />}
				iconRight={<Icon name='search' size={22} />}
				iconClose={<Icon name='close' size={24} />}
				style={{}}
			/> */}

			<Button
				title='Open Global BottomSheet'
				onPress={openSheet}
				style={{ alignSelf: 'center', marginVertical: 10 }}
			/>
			<Button
				title='Show Global Toast'
				onPress={showToast}
				style={{ alignSelf: 'center', marginVertical: 10, marginBottom: 250 }}
			/>
		</Fragment>
	);
};
