import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button, TypeButton} from './Button';
import PreviewFilesSelected from './PreviewFilesSelected';
import {Ionicons} from "@expo/vector-icons";
import ModalOptionsUploadFile from "./ModalOptionsUploadFile";
import {InputFileProps} from "./types";

const InputFile: React.FC<InputFileProps> = ({
	      label,
	      multiple = true,
	      previewFiles = false,
	      typeFiles = 'all',
	      onChange,
	      typeInputFile: type = "button",
	      isRequired = false,
	      buttonStyle = {},
	      labelButtonStyle = {},
	      defaultValue = [],
	      onRemoveFile,
	      noConcatenation = false
      }) => {

	const [filesSelected, setFilesSelected] = React.useState<FileSelectedType[]>([]);
	const [showModalMenu, setShowModalMenu] = React.useState(false);

	const {theme} = useTheme();
	const styles = makeStyles(theme)

	React.useEffect(() => {
		if (!defaultValue || defaultValue.length === 0) return;
		setFilesSelected(defaultValue)
	}, [defaultValue])

	const setFilesAssets = (fileAssets: FileSelectedType[]) => {
		setShowModalMenu(false);
		setFilesSelected(fileAssets);
		onChange?.(fileAssets)
	};

	const handleRemoveFile = (indexFile: number) => {
		setFilesSelected((prev) => {
			return prev.filter((_, index) => index !== indexFile)
		})
		onRemoveFile?.(indexFile)
	}


	const renderPreviewFiles = React.useMemo(() => {
		if (!previewFiles || !filesSelected.length) return null;
		return <PreviewFilesSelected
			files={filesSelected.reverse()}
			onRemove={handleRemoveFile}
		/>;
	}, [filesSelected])


	return (
		<>
			{type === "button" ? (
				<Button
					onPress={() => setShowModalMenu(!showModalMenu)}
					title={label ?? 'Upload'}
					type={TypeButton.TEXT}
					labelStyle={StyleSheet.flatten([{color: '#1F3552'}, labelButtonStyle])}
					contentStyle={StyleSheet.flatten([{
						padding: 0,
						marginBottom: 30,
						justifyContent: 'flex-start'
					}, buttonStyle])}
				/>
			) : (
				<TouchableOpacity
					style={styles.containerFileType}
					activeOpacity={1}
					onPress={() => setShowModalMenu(!showModalMenu)}>
					<Ionicons name="md-cloud-upload-outline" size={24} color={palette.PrimaryButton}/>
					<Text style={styles.labelContainer}>{label ?? 'Upload'}{isRequired &&
            <Text style={{color: 'red'}}>*</Text>}</Text>
				</TouchableOpacity>
			)}
			{renderPreviewFiles}
			<ModalOptionsUploadFile
				setFiles={setFilesAssets}
				files={filesSelected}
				openModal={showModalMenu}
				onOpenModal={setShowModalMenu}
				typeFiles={typeFiles}
				multiple={multiple}
				noConcatenation={noConcatenation}
			/>
		</>
	);
};
export default InputFile;
