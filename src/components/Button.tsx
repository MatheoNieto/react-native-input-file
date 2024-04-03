import React from 'react';
import {Pressable, StyleSheet, ActivityIndicator, Text} from 'react-native'
import {ButtonProps} from "./types";
import {Styles} from "./styles";
import {Ionicons} from "@expo/vector-icons";

const Button: React.FC<ButtonProps> = ({label, onPress, icon,labelStyle,colorLoading, iconColor= 'black', iconSize = 20,isLoading,disabled,contentStyle})=> {
	return (
		<Pressable onPress={onPress} style={StyleSheet.flatten([Styles.button, contentStyle,  disabled && {backgroundColor: '#E9E7E7'}])}>
			{icon && (
				<Ionicons
					name={icon}
					size={iconSize}
					color={iconColor}
				/>
			)}
			{isLoading && (
				<ActivityIndicator size="small" color={colorLoading ?? iconColor} />
			)}
			{label && <Text style={[Styles.labelButton, labelStyle, disabled && {color: '#ADADAD'}]}>
				{label}
			</Text>}
		</Pressable>
	)
}

export default Button
