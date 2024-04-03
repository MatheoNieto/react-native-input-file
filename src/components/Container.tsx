import React from 'react';
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {ContainerProps} from "./types";
import {Styles} from "./styles";


const Container: React.FC<ContainerProps> = ({containerStyle, onPress, labelContainer, label, iconColor="·1F3552",required=false}) => {
	return (
		<TouchableOpacity
			style={StyleSheet.flatten([Styles.containerFileType, containerStyle])}
			activeOpacity={1}
			onPress={onPress}>
			<Ionicons name="md-cloud-upload-outline" size={24} color={iconColor}/>
			<Text style={StyleSheet.flatten([Styles.labelContainer, labelContainer])}>{label ?? 'Upload'}{required &&
        <Text style={{color: 'red'}}>*</Text>}</Text>
		</TouchableOpacity>
	)
}

export default  Container
