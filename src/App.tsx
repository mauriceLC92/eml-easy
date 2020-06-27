import React, { useState } from 'react';
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
      // const html = readEmlFile(reader.result)
      // console.log('html', JSON.stringify(html, null, 4));
      // setFile(html)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  return (
    <div className="flex justify-center">
      <header>
        <div>
          <input type="file" onChange={(event) => onChangeHandler(event)} />
          {/* <button onClick={() => onClickHandler()}>
            Upload!
          </button> */}
        </div>
        <div>
          {
            file && htmlToReactParser.parse(file)
          }
        </div>
        {
          image && image.length > 0 && <img src={`${image}`} alt="dv" />
        }
      </header>
    </div>
  );
}

export default App;
