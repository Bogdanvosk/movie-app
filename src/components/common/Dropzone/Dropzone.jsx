import PropTypes from 'prop-types';
import cn from 'classnames';

import { useDropzone } from 'react-dropzone';
import React, { useCallback } from 'react';

import s from './Dropzone.module.scss';

const Dropzone = ({ onSetCover, className = '' }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const cover = {
      ...acceptedFiles[0],
      preview: URL.createObjectURL(acceptedFiles[0]),
    };

    onSetCover(cover);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noDragEventsBubbling: true,
    maxFiles: 1,
    accept: {
      'image/png': ['.jpeg', '.jpg', '.png'],
    },
  });

  return (
    <div {...getRootProps()} className={className}>
      <input {...getInputProps()} />
      <div className={cn(s.dropzone, { [s.active]: isDragActive })}>
        <span className={s.text}>
          Кликните или перетащите файл, чтобы выбрать обложку фильма
        </span>
      </div>
    </div>
  );
};

export default Dropzone;

Dropzone.propTypes = {
  onSetCover: PropTypes.func,
  className: PropTypes.string,
};
