import React, { useState } from 'react';
import { Heading } from './components/Heading';
import { InputZone } from './components/InputZone';
import { FileProvider } from './context/fileContext';

// const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();
// const reactElement = htmlToReactParser.parse(testHtml);
// const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null || '')
  const handleSetFile = (file: any) => {
    setFile(file)
  }
  const handleSetImage = (file: any) => {
    setImage(file)
  }
  return (
    <FileProvider initialValue={null}>
      <div className="">
        <Heading title='Easy .eml' emoji={`📧`} />
        <div className="flex">
          <InputZone handleSetFile={handleSetFile} handleSetImage={handleSetImage} />

          {/* right hand zone */}
          <div className="w-3/6 flex justify-center items-center bg-gray-200">
            {
              file && htmlToReactParser.parse(file)
            }
            {
              image && image.length > 0 && <img src={`${image}`} alt="dv" />
            }
          </div>
        </div>
      </div>
    </FileProvider>
  );
}

export default App;



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
