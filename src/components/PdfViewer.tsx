import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import PDFReader from 'rn-pdf-reader-js';

type Props = {
	url: string;
};

const PdfViewer: React.FC<Props> = ({url}) => {
	return (
		<View style={styles.container}>
			<PDFReader
				source={{
					uri: url,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		height: Platform.OS == 'ios' ? '80%' : '74%',
	},
});

export default PdfViewer;
