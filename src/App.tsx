import React, { useState } from 'react';
import { Heading } from './components/Heading';
const emlformat = require('eml-format');

// const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();
// const reactElement = htmlToReactParser.parse(testHtml);
// const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null || '')
  const onChangeHandler = (event: any) => {
    var file = event.target.files[0];
    console.log('', file);
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      // console.log(reader.result);
      emlformat.read(reader.result, function (error: any, data: any) {
        if (error) return console.log(error);
        if (data.attachments && data.attachments.length > 0) {
          console.log(data.attachments, JSON.stringify({}, null, 4));
          const arr = data.attachments[0].data;
          var blob = new Blob([arr], { 'type': 'image/png' });
          var url = URL.createObjectURL(blob);
          const base64Data = btoa(String.fromCharCode.apply(null, arr));
          setImage(url)
        }
        setFile(data.html);
      });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  return (
    <div className="h-full">
      <Heading title='Easy .eml' emoji={`📧`} />
      <div className="flex">
        {/* Left screen */}
        <div className="h-screen w-3/6 flex justify-center items-center flex-col bg-gray-500 space-y-20">
          <input className="block cursor-pointer" type="file" onChange={(event) => onChangeHandler(event)} />
          <div className="border-gray-700 border-4 border-dashed w-9/12 h-32 flex justify-center items-center underline leading-10 text-2xl">
            Drag and drop file zone
            <div className="w-1/12 h-1/12 text-base">
              <DocumentAddIcon />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="h-screen w-3/6 flex justify-center items-center bg-orange-400 overflow-y-auto overflow-x-auto">
          {
            file && htmlToReactParser.parse(file)
          }
          {
            image && image.length > 0 && <img src={`${image}`} alt="dv" />
          }
        </div>

      </div>
    </div>
  );
}

export default App;

function DocumentAddIcon(props: any) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
}

{/* <div className="flex justify-center items-center">
<div>
  <h1 className='text-6xl text-center'>
    Easy .eml{' '}
    <span className='text-6xl' role="img" aria-label="email">📧</span>
  </h1>
</div>
<div className="flex justify-center items-center w-screen h-screen">
  <input className="block" type="file" onChange={(event) => onChangeHandler(event)} />
</div>
<div>
  {
    file && htmlToReactParser.parse(file)
  }
</div>
{
  image && image.length > 0 && <img src={`${image}`} alt="dv" />
}
</div> */}
