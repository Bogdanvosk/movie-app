import PropTypes from 'prop-types';
import cn from 'classnames';

import { useDropzone } from 'react-dropzone';
import React, { useCallback, useEffect } from 'react';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { useFormContext } from 'react-hook-form';

import s from './Dropzone.module.scss';

const Dropzone = ({ name }) => {
  const screenWidth = useScreenWidth();

  const {
    register,
    unregister,
    watch,
    clearErrors,
    formState: { errors, defaultValues },
    setValue,
  } = useFormContext();

  const value = watch(name);
  const isDirtyField = defaultValues[name] !== value;

  useEffect(() => {
    register(name, { required: 'Файл обязателен' });

    return () => {
      unregister(name);
    };
  }, [register, unregister]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      let reader = new FileReader();

      reader.onloadend = function () {
        setValue(name, { name: file.path, src: reader.result });
        clearErrors(name);
      };

      reader.readAsDataURL(file);
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/png': ['.jpeg', '.jpg', '.png'],
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div
        className={cn(s.dropzone, {
          [s.active]: isDragActive,
          [s.error]: errors[name],
          [s.valid]: isDirtyField && !errors[name],
        })}
      >
        <span className={s.text}>
          Нажмите{screenWidth > 1024 && ' или перетащите файл'}, чтобы выбрать
          обложку фильма
        </span>
      </div>
      <span
        className={cn(s.cover, {
          [s.errorText]: errors[name],
          [s.show]: value || errors[name],
        })}
      >
        {value
          ? value.name
          : errors[name]
          ? 'Файл обязателен'
          : 'Файл не выбран'}
      </span>
    </div>
  );
};

export default Dropzone;

Dropzone.propTypes = {
  name: PropTypes.string,
};
