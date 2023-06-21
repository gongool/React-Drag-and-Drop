import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './dropfileinput.css';
import uploadImg from '../../assets/cloud-upload-regular-240.png';

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
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <div className="drop-file-preview__title">
                            Ready To Upload
                        </div>
                    </div>
                ) : null
            }
        </>
    );
};

Dropfileinput.propTypes = {
    onFileChange: PropTypes.func,
};

export default Dropfileinput;
