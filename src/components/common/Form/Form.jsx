import PropTypes from 'prop-types';
import cn from 'classnames';

import { FormProvider, useForm } from 'react-hook-form';
import { useEffect } from 'react';
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
import Button from '../Button/Button';
import Dropzone from '../Dropzone/Dropzone';

import s from './Form.module.scss';

const Form = ({ close, item = null, className = '' }) => {
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      genre: '',
      year: '',
      duration: '',
      review: '',
      cover: null,
    },
  });
  const dispatch = useDispatch();
  const screenWidth = useScreenWidth();

  // const isDirty = methods.formState.isDirty;

  const onSubmit = methods.handleSubmit((data) => {
    if (item === null) {
      const newMovie = {
        ...data,
        id: Date.now().toString(),
        isFavourite: false,
      };
      dispatch(addMovieAction(newMovie));
    } else {
      // TODO: if no changes, don't dispatch
      const updatedMovie = { ...data, id: item.id };

      dispatch(updateMovieAction(updatedMovie));
    }

    window.localStorage.removeItem('form');
    close();
  });

  const onDeleteMovie = () => {
    dispatch(deleteMovieAction(item.id));

    window.localStorage.removeItem('form');
    close();
  };

  useFormPersist('form', {
    ...methods,
    storage: window.localStorage,
  });

  useEffect(() => {
    if (item !== null) {
      Object.keys(item)
        .filter((key) => key !== 'id')
        .forEach((key) => {
          methods.setValue(key, item[key]);
        });
    }
  }, [item, methods]);

  const onResetForm = () => {
    methods.reset();
  };

  const isDirtyForm = () => {
    const allValuesIsEmpty = Object.values(methods.getValues()).every(
      (value) => value === '' || value === null
    );

    if (allValuesIsEmpty) return false;

    return true;
  };

  return (
    <FormProvider {...methods}>
      <form className={cn(s.form, className)} onSubmit={onSubmit}>
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
            <Dropzone name='cover' />
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
            {!item && (
              <Button
                variant='delete'
                type='reset'
                className={s.button}
                onClick={onResetForm}
                disabled={!isDirtyForm()}
              >
                Очистить
              </Button>
            )}
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
  className: PropTypes.string,
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
