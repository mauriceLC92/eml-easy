import React, { createContext, useState } from "react";

type FileContextType = {
  file: any;
  setFile: (value: any) => void;
  image: any;
  setImage: (value: any) => void;
};
export const FileContext = createContext<FileContextType | undefined>(undefined)

export const FileProvider = ({ initialValue, children }: IFileProvider) => {
  const [file, setFile] = useState(initialValue);
  const [image, setImage] = useState(null || '');

  const fileProviderValue = { file, setFile, image, setImage }

  return (
    <FileContext.Provider value={fileProviderValue}>
      {children}
    </FileContext.Provider>
  )
};

interface IFileProvider {
  children: React.ReactNode;
  initialValue: any;
}
