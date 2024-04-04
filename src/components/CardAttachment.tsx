import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ViewerFiles from './ViewerFiles';
import {Ionicons} from '@expo/vector-icons';
import GetIconType from './GetIconType';
import { CardAttachmentProps } from './types';


const CardAttachment: React.FC<CardAttachmentProps> = ({
	                                                       name,
	                                                       type,
	                                                       linkAttachment,
	                                                       onRemove,
	                                                       horizontal = false,
	                                                       withIcon = false,
                                                       }) => {
	const [visibleViewer, setVisibleViewer] = React.useState(false);
	const handleShowImage = () => {
		setVisibleViewer(true);
	};

	return (
		<>
			<TouchableOpacity
				activeOpacity={1}
				onPress={handleShowImage}
				style={
					horizontal
						? styles.containerCardHorizontal
						: styles.containerCard
				}>
					<View style={horizontal ? styles.contentHorizontal : styles.content}>
						{withIcon && (
							<GetIconType/>
						)}
						<Text style={styles.textName} numberOfLines={2}>
							{name}
						</Text>
						{onRemove && (
							<TouchableOpacity
								style={{marginLeft: 2}}
								onPress={() => onRemove?.()}>
								<Ionicons
									name="close-circle-outline"
									size={30}
									color="#1F3552"
								/>
							</TouchableOpacity>
						)}
					</View>
			</TouchableOpacity>

			<ViewerFiles
				typeFile={type}
				url={linkAttachment}
				visible={visibleViewer}
				onClose={() => setVisibleViewer(false)}
			/>
		</>
	);
};

const styles =
	StyleSheet.create({
		containerCard: {
			width: '100%',
			backgroundColor: 'white',
			marginVertical: 2,
			paddingHorizontal: 5,
			paddingVertical: 10,
			borderRadius: 5,
		},
		containerCardHorizontal: {
			backgroundColor: 'white',
			borderRadius: 5,
			width: 220,
		},
		contentHorizontal: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-start',
		},
		content: {
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		textName: {
			fontSize: 16,
			color: '#5E9CEF',
			fontWeight: '500',
			width: '80%',
		},
	});

export default CardAttachment;
