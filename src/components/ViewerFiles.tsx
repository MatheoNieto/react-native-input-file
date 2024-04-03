import React from 'react';
import {Dimensions, Platform, StyleSheet,  View} from 'react-native';
import {BottomSheet, BottomSheetRef} from 'react-native-sheet';
import PdfViewer from './PdfViewer';

import {formatImages, formatPdf} from './types';
import ViewerImage from "./ViewerImage";
type Props = {
	typeFile: string;
	nameFile: string;
	url: string;
	visible: boolean;
	onClose?: () => void;
	download?: boolean;
};
const {height: heightScreen} = Dimensions.get('screen');

const ViewerFiles: React.FC<Props> = ({
	                                      typeFile,
	                                      nameFile,
	                                      url,
	                                      visible,
	                                      onClose,
	                                      download = true,
                                      }) => {

	const isPdf = formatPdf.includes(typeFile);
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
				{Platform.OS == 'ios' && <View style={{height: 25}} />}
				<View style={styles.contentClose}>
				</View>
				<PdfViewer url={url} />
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
