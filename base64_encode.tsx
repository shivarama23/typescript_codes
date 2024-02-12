import React from 'react';

interface ImageProps {
  base64: string;
}

const Base64Image: React.FC<ImageProps> = ({ base64 }) => {
  return (
    <div>
      {/* Display the image */}
      <img src={`data:image/jpeg;base64,${base64}`} alt="Base64 Encoded" />
    </div>
  );
};

export default Base64Image;
