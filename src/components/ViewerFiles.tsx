import React from 'react';
import {Dimensions,  StyleSheet, Text } from 'react-native';
import {BottomSheet, BottomSheetRef} from 'react-native-sheet';

import {formatImages, } from './types';
import ViewerImage from "./ViewerImage";
type Props = {
	typeFile: string;
	url: string;
	visible: boolean;
	onClose?: () => void;
};
const {height: heightScreen} = Dimensions.get('screen');

const ViewerFiles: React.FC<Props> = ({
	                                      typeFile,
	                                      url,
	                                      visible,
	                                      onClose,
                                      }) => {

	const isImage = formatImages.includes(typeFile);
	const bottomSheet = React.useRef<BottomSheetRef>(null);


	React.useEffect(() => {
		if (visible) {
			bottomSheet.current?.show();
		} else {
			bottomSheet.current?.hide();
		}
	}, [visible]);


	if (isImage) {
		return (
			<ViewerImage
				visible={visible}
				source={{uri: url}}
				onClose={() => onClose && onClose()}
			/>
		);
	}

		return (
			<BottomSheet
				height={heightScreen}
				ref={bottomSheet}
				draggable={false}
				sheetStyle={{backgroundColor: 'white'}}
			>
				<Text style={styles.textUnsupport}>Sorry, unsupported media type</Text>
			</BottomSheet>
		);

};

const styles =
	StyleSheet.create({
		contentModal: {
			padding: 24,
			flexDirection: 'column',
			alignItems: 'center',
		},
		textUnsupport: {
			fontSize: 14,
		},
		labelsButtonPdf: {
			fontSize: 14,
		},

		buttonClose: {
			borderRadius: 8,
			margin: 12,
			width: 40,
			padding: 4,
			borderColor: 'black',
			borderWidth: 1,
		},
		buttonDownload: {
			flex: 1,
			borderRadius: 8,
			margin: 12,
			padding: 4,
			borderColor: 'black',
			borderWidth: 1,
		},
		contentClose: {
			marginTop: 12,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-end',
			width: '100%',
		},
	});

export default ViewerFiles;
