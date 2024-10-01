import PropTypes from 'prop-types';
import cn from 'classnames';

import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import s from './Dropzone.module.scss';

const Dropzone = ({ name }) => {
  const {
    register,
    unregister,
    watch,
    clearErrors,
    formState: { errors, dirtyFields },
    setValue,
  } = useFormContext();

  const value = watch(name);
  const isValidField = dirtyFields[name] && !errors[name];

  useEffect(() => {
    register(name, {
      required: 'Файл обязателен',
    });

    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);

  const onSelect = (e) => {
    const file = e.target.files[0];
    const urlImage = URL.createObjectURL(file);

    setValue(name, { name: file.name, src: urlImage }, { shouldDirty: true });
    clearErrors(name);
  };

  return (
    <div className={s.wrapper}>
      <label
        className={cn(s.label, {
          [s.error]: errors[name],
          [s.valid]: isValidField,
        })}
      >
        <span className={s.text}>Нажмите чтобы выбрать обложку фильма</span>
        <input
          type='file'
          accept='image/png, image/gif, image/jpeg'
          hidden
          onChange={onSelect}
        />
      </label>
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
