import { FormProvider, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { useDispatch } from 'react-redux';
import {
  addMovieAction,
  deleteMovieAction,
  updateMovieAction,
} from '../../../store/features/movies';
import useFormPersist from 'react-hook-form-persist';
import useScreenWidth from '../../../hooks/useScreenWidth';

import GridLayout from '../GridLayout/GridLayout';
import Label from '../Label/Label';
import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import Dropzone from '../Dropzone/Dropzone';
import Button from '../Button/Button';

import s from './Form.module.scss';

const Form = ({ close, item = null }) => {
  const [cover, setCover] = useState(null);
  const methods = useForm({ mode: 'onChange' });
  const dispatch = useDispatch();
  const screenWidth = useScreenWidth();

  const onSubmit = methods.handleSubmit((data) => {
    if (item === null) {
      const newMovie = {
        ...data,
        cover,
        id: Date.now().toString(),
        isFavourite: false,
      };
      dispatch(addMovieAction(newMovie));
    } else {
      const updatedMovie = { ...data, cover, id: item.id };
      dispatch(updateMovieAction(updatedMovie));
    }

    window.localStorage.clear();
    close();
  });

  const onDeleteMovie = () => {
    dispatch(deleteMovieAction(item.id));
    window.localStorage.clear();
    close();
  };

  useFormPersist('form', {
    ...methods,
    storage: window.localStorage,
  });

  useEffect(() => {
    if (item !== null) {
      Object.keys(item)
        .filter((key) => key !== 'id' && key !== 'cover')
        .forEach((key) => {
          methods.setValue(key, item[key]);
        });

      setCover(item.cover);
    }
  }, [item]);

  console.log(cover);

  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={onSubmit}>
        <GridLayout>
          <Label title='Название' fieldName='name'>
            <Input
              placeholder='Введите название'
              type='text'
              fieldName='name'
            />
          </Label>
          <Label title='Жанр' fieldName='genre'>
            <Input placeholder='Введите жанр' type='text' fieldName='genre' />
          </Label>
          <Label title='Год выпуска' fieldName='year'>
            <Input
              placeholder='Введите год выпуска'
              type='number'
              fieldName='year'
            />
          </Label>
          <Label title='Длительность' fieldName='duration'>
            <Input
              placeholder='Длительность в минутах'
              type='number'
              fieldName='duration'
            />
          </Label>
          <Label title='Рецензия' className={s.review} fieldName='review'>
            <Textarea fieldName='review' />
          </Label>

          <div className={s.dropzone}>
            <Dropzone cover={cover} onSetCover={setCover} />
            <span className={cn(s.cover, { [s.show]: cover })}>
              {cover ? cover.name : 'Cover name'}
            </span>
          </div>
          <div className={s.buttons}>
            <Button
              variant={item ? 'save' : 'default'}
              type='submit'
              className={s.button}
              iconName={item && screenWidth >= 1024 ? 'save' : ''}
            >
              {item ? 'Сохранить' : 'Добавить'}
            </Button>
            {item && (
              <Button
                variant='delete'
                type='button'
                className={cn(s.button, s.delete)}
                onClick={onDeleteMovie}
                iconName={screenWidth >= 1024 ? 'delete' : ''}
              >
                Удалить
              </Button>
            )}
          </div>
        </GridLayout>
      </form>
    </FormProvider>
  );
};

export default Form;

Form.propTypes = {
  close: PropTypes.func,
  item: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string,
    duration: PropTypes.string,
    review: PropTypes.string,
    cover: PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
