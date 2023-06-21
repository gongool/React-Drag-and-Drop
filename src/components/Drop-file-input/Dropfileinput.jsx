import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './dropfileinput.css';
import uploadImg from '../../assets/cloud-upload-regular-240.png';

// Define ImageConfig or use a placeholder image source
const ImageConfig = {
  default: 'placeholder-image-source.png',
};

const Dropfileinput = (props) => {
  const wrapperRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add('dragover');
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
  const onDrop = () => wrapperRef.current.classList.remove('dragover');

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    console.log(file);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="dropfileinput"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="dropfileinput__label">
          <img src={uploadImg} alt="" />
          <p>Drag & Drop Your Files Here</p>
        </div>
        <input type="file" value="" onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready To Upload</p>
          {fileList.map((item, index) => (
            <div key={index} className="drop-file-preview__item">
              <img
                src={ImageConfig[item.type.split('/')[1] || ImageConfig.default]}
                alt=""
              />
              <div className="drop-file-preview__item__info">
                <p>{item.name}</p>
                <p>{item.size}B</p>
                <span
                  className="drop-file-preview__item__del"
                  onClick={() => fileRemove(item)}
                >
                  x
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

Dropfileinput.propTypes = {
  onFileChange: PropTypes.func,
};

export default Dropfileinput;
