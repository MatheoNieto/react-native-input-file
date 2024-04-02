import {ViewStyle, TextStyle} from 'react-native'

export type InputFileProps = {
	selectedFiles?: () => void;
	multiple?: boolean;
	previewFiles?: boolean;
	typeFiles?: 'images' | 'pdf' | 'all';
	copyToCacheDirectory?: boolean;
	onChange?: (dataFiles?: FileSelectedType[]) => void;
	label?: string;
	typeInputFile?: "container" | "button",
	isRequired?: boolean;
	buttonStyle?: ViewStyle;
	labelButtonStyle?: TextStyle;
	onRemoveFile?: (indexFile: number) => void
	noConcatenation?: boolean;
}

export type FileSelectedType = {
	mimeType: string;
	uri: string;
	fileSize: number
	fileName: string;
}
