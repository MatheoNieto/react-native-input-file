import React from 'react';
import ImageView from 'react-native-image-viewing';
import {View} from "react-native";
import Button from "./Button";

type ImagesType = {
	uri: string;
};

type ViewerImageProps = {
	source: ImagesType;
	visible: boolean;
	onClose?: () => void;
	onLongPress?: () => void;
	FooterComponent?: React.ReactElement
};
const ViewerImage: React.FC<ViewerImageProps> = ({
	                                                 source,
	                                                 visible,
	                                                 onClose,
	                                                 onLongPress
                                                 }) => {
	return (
		<ImageView
			images={[source]}
			imageIndex={0}
			visible={visible}
			doubleTapToZoomEnabled
			onRequestClose={() => onClose && onClose()}
			FooterComponent={() =><View style={{paddingVertical: 20}}>
				<Button
					onPress={() => onLongPress && onLongPress()}
					icon="share-outline"
					iconColor="white"
					iconSize={35}
				/>
			</View>}
		/>
	);
};

export default ViewerImage;
