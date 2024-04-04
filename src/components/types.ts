import {ViewStyle, TextStyle} from 'react-native'
import {Ionicons} from "@expo/vector-icons";

type InputFileProps = {
	selectedFiles?: () => void;
	multiple?: boolean;
	previewFiles?: boolean;
	typeFiles?: 'images' | 'pdf' | 'all';
	copyToCacheDirectory?: boolean;
	onChange?: (dataFiles?: FileSelectedType[]) => void;
	label?: string;
	typeInputFile?: "container" | "button",
	required?: boolean;
	onRemoveFile?: (indexFile: number) => void
	noConcatenation?: boolean;
}

export type InputFileContainerProps = {
	typeInputFile: "container";
	containerStyle?: ViewStyle;
	labelContainer?: TextStyle;
} & InputFileProps

export type InputFileButtonProps = {
	typeInputFile: "button";
	buttonStyle?: ViewStyle;
	labelButtonStyle?: TextStyle;
	disabled?: boolean;
	isLoading?: boolean;
	iconSize?: number;
	colorLoading?: string;
	icon?: keyof typeof Ionicons.glyphMap;
	iconColor?: string;
} & InputFileProps

export type FileSelectedType = {
	mimeType: string;
	uri: string;
	fileSize: number
	fileName: string;
}
export const MediaTypes = {
	images: 'image/*',
	pdf: 'pdf/*',
	all: '*/*',
};

export type ButtonProps = {
	colorLoading?: string;
	icon?: keyof typeof Ionicons.glyphMap;
	iconColor?: string;
	label?: string;
	onPress: () => void;
	contentStyle?: ViewStyle;
	labelStyle?: TextStyle;
	disabled?: boolean;
	isLoading?: boolean;
	iconSize?: number;
}

export type ContainerProps = {
	containerStyle?: ViewStyle;
	labelContainer?: TextStyle;
	onPress?: () => void;
	label: string;
	iconColor: string;
	required?: boolean;
}


export type CardAttachmentProps = {
	name: string;
	type: string;
	linkAttachment: string;
	downloadFile?: boolean;
	onRemove?: () => void;
	horizontal?: boolean;
	withIcon?: boolean;
	isLoading?: boolean;
};

export const formatImages = ['gif', 'png', 'bmp', 'jpeg', 'jpg'];
export const formatPdf = ['pdf'];

export const get_url_extension = (url: string) => {
	if (!url) return '';

	return url.split(/[#?]/)[0].split('.').pop()?.trim();
};

