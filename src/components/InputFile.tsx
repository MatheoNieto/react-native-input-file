import React from 'react';
import {StyleSheet} from 'react-native';
import PreviewFilesSelected from './PreviewFilesSelected';
import ModalOptionsUploadFile from "./ModalOptionsUploadFile";
import {FileSelectedType, InputFileContainerProps, InputFileButtonProps} from "./types";
import Container from "./Container";
import Button from "./Button";

const InputFile: React.FC<InputFileContainerProps | InputFileButtonProps> = ({
	      label,
	      multiple = true,
	      previewFiles = false,
	      typeFiles = 'all',
	      onChange,
	      typeInputFile: type = "button",
	      onRemoveFile,
		  required,
	      noConcatenation = false,
		  ...rest
      }) => {

	const [filesSelected, setFilesSelected] = React.useState<FileSelectedType[]>([]);
	const [showModalMenu, setShowModalMenu] = React.useState(false);


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
					label={label ?? 'Upload'}
					labelStyle={StyleSheet.flatten([{color: '#1F3552'}, (rest as InputFileButtonProps).labelButtonStyle])}
					contentStyle={StyleSheet.flatten([{
						padding: 0,
						marginBottom: 30,
						justifyContent: 'flex-start'
					}, (rest as InputFileButtonProps).buttonStyle])}
					{...rest}
				/>
			) : (
				<Container 
					iconColor={"#1F3552"} 
					onPress={() => setShowModalMenu(!showModalMenu)} 
					label={label ?? 'Upload'} 
					required={required}
					{...rest}
				/>
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
