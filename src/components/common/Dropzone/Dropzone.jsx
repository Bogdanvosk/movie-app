import PropTypes from 'prop-types';
import cn from 'classnames';

import { useDropzone } from 'react-dropzone';
import React, { useCallback } from 'react';
import useScreenWidth from '../../../hooks/useScreenWidth';

import s from './Dropzone.module.scss';

const Dropzone = ({ onSetCover, isRequired = false, className = '' }) => {
  const screenWidth = useScreenWidth();

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    let reader = new FileReader();

    reader.onloadend = function () {
      onSetCover({ name: file.path, src: reader.result });
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
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
          Нажмите{screenWidth > 1024 && ' или перетащите файл'}, чтобы выбрать
          обложку фильма
        </span>
      </div>
    </div>
  );
};

export default Dropzone;

Dropzone.propTypes = {
  onSetCover: PropTypes.func,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
};
