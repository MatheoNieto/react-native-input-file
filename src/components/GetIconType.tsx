import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {images} from "../assets/images";
import {formatImages, formatPdf} from "./types";

type GetIconTypeProps = {
	type?: string;
	imageUrl?: string;
};
const GetIconType: React.FC<GetIconTypeProps> = ({type, imageUrl}) => {
	const isImage = type ? formatImages.includes(type) : false;
	const isPdf = type ? formatPdf.includes(type) : false;

	if (isImage && !!imageUrl) {
		return <Image source={{uri: imageUrl}} style={styles.sizeIcons}/>;
	}

	if (isPdf) {
		return <Image resizeMode="contain" source={images.pdfIcon}  style={styles.sizeIcons}/>;
	}

	return <Image resizeMode="contain"  source={images.fileIcon} style={styles.sizeIcons}/>;
};

const styles = StyleSheet.create({
	sizeIcons: {width: 20, height: 20, marginRight: 10 },
});
export default GetIconType;
