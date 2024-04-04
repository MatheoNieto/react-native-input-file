# React native input file

With this library you can attach files in your form
![Animation](docs/image.gif)

## Example

```javascript
<InputFile
  typeInputFile="button"
  labelButtonStyle={{fontWeight: 'bold'}}
  multiple
  label="+ Attach File"
  previewFiles
  onChange={dataFiles => handleChangeFiles(dataFiles)}
/>
```

## Props
```typescript

type InputFileProps = {
  selectedFiles?: () => void;
  multiple?: boolean;
  previewFiles?: boolean;
  typeFiles?: 'images' | 'pdf' | 'all';
  copyToCacheDirectory?: boolean;
  onChange?: (dataFiles?: FileSelectedType[]) => void;
  label?: string;
  typeInputFile?: "container" | "button",
  required?: boolean;
  onRemoveFile?: (indexFile: number) => void
  noConcatenation?: boolean;
}

type InputFileContainerProps = {
  typeInputFile: "container";
  containerStyle?: ViewStyle;
  labelContainer?: TextStyle;
} & InputFileProps

type InputFileButtonProps = {
  typeInputFile: "button";
  buttonStyle?: ViewStyle;
  labelButtonStyle?: TextStyle;
  disabled?: boolean;
  isLoading?: boolean;
  iconSize?: number;
  colorLoading?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
} & InputFileProps

```
