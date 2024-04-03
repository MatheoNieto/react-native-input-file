import React from 'react';
import {FlatList, View} from 'react-native';
import CardAttachment from "./CardAttachment";
import {FileSelectedType, get_url_extension} from "./types";

type PreviewFilesSelectedProps = {
	files: FileSelectedType[];
	onRemove: (indexFile: number) => void;
	disabledChanges?: boolean;
	statusUploadingFile?: 'uploading' | 'error' | 'complete';
};

const PreviewFilesSelected: React.FC<PreviewFilesSelectedProps> = ({
	                                                                   files,
	                                                                   onRemove,
	                                                                   disabledChanges,
	                                                                   statusUploadingFile,
                                                                   }) => {

	const renderFiles = ({item, index}: { item: FileSelectedType, index: number }) => {
		const extensionAttachment = get_url_extension(item.uri.toLowerCase());
		if (!extensionAttachment) return null;
		return (
			<CardAttachment
				name={item.fileName}
				type={extensionAttachment}
				linkAttachment={item.uri}
				downloadFile={false}
				onRemove={() => !disabledChanges && onRemove(index)}
				isLoading={statusUploadingFile === 'uploading'}
			/>
		);
	};

	return (
		<View style={{width: '100%', marginBottom: 10}}>
			<FlatList
				data={files}
				keyExtractor={(_, index) => `file-preview-${index}`}
				renderItem={renderFiles}
				scrollEnabled={false}
				nestedScrollEnabled={true}
			/>
		</View>
	);
};

export default PreviewFilesSelected;
