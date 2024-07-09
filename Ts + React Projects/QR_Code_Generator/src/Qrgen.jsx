import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './Qrgen.css';

const QRGen = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDownloadQR = () => {
    const qrCodeRef = document.getElementById('qrcode');

    const qrCodeURL = qrCodeRef.toDataURL('image/png');

    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeURL;
    downloadLink.download = 'QrCode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="project">
      <div className="qrcode-generator">
        <h2>QR Input</h2>
        <input
          type="text"
          value={inputValue}
          id="qrinput"
          onChange={handleInputChange}
          placeholder="Enter text or URL"
        />
      </div>
      
      {inputValue && (
        <div className="qrcode">
          <h2>QR Output</h2>
          <QRCode
            id="qrcode"
            value={inputValue}
            size={400}
            level="H"
            renderAs="png"
            includeMargin={true}
            fgColor="#000000"
            bgColor="#c2192a"
            margin={10}
          />
        </div>
      )}

      {inputValue && (
        <button id="savebutton" onClick={handleDownloadQR}>
          Download QR
        </button>
      )}
    </div>
  );
};

export default QRGen;
