import React, { FC, useState } from 'react';
const emlformat = require('eml-format');

interface IInputZone {
  children?: React.ReactNode;
  handleSetFile: (file: any) => void;
  handleSetImage: (file: any) => void;
}
export const InputZone: FC<IInputZone> = ({ children, handleSetFile, handleSetImage }) => {
  const onChangeHandler = (event: any) => {
    var file = event.target.files[0];
    console.log('', file);
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      emlformat.read(reader.result, function (error: any, data: any) {
        if (error) return console.log(error);
        if (data.attachments && data.attachments.length > 0) {
          console.log(data.attachments, JSON.stringify({}, null, 4));
          const arr = data.attachments[0].data;
          var blob = new Blob([arr], { 'type': 'image/png' });
          var url = URL.createObjectURL(blob);
          // const base64Data = btoa(String.fromCharCode.apply(null, arr));
          handleSetImage(url)
        }
        handleSetFile(data.html);
      });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  return (
    <div className="w-3/6 flex justify-center items-center flex-col bg-gray-300 space-y-20">
      <h2 className="mt-4 text-2xl font-sans">
        Add a .eml view to view its contents.
      </h2>
      <input
        className="bg-gray-300 focus:outline-none focus:shadow-outline border border-gray-600 rounded-lg py-2 px-4 block appearance-none leading-normal cursor-pointer"
        type="file"
        onChange={(event) => onChangeHandler(event)}
      />
      <div className="border-gray-700 border-4 border-dashed w-9/12 h-32 flex justify-center items-center underline leading-10 text-2xl">
        Drag and drop file zone
            <div className="w-1/12 h-1/12 text-base">
          <DocumentAddIcon />
        </div>
      </div>
    </div>
  )
}
// https://www.smashingmagazine.com/2020/02/html-drag-drop-api-react/
const DocumentAddIcon = (props: any) => {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
}
