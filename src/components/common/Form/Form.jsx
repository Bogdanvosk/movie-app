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

import GridLayout from '../GridLayout/GridLayout';
import Label from '../Label/Label';
import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import Dropzone from '../Dropzone/Dropzone';
import Preview from '../Previews/Preview';
import Button from '../Button/Button';

import s from './Form.module.scss';

const Form = ({ close, item = null }) => {
  const [cover, setCover] = useState(null);
  const methods = useForm();
  const dispatch = useDispatch();

  const onSubmit = methods.handleSubmit((data) => {
    if (item === null) {
      const newMovie = { ...data, cover, id: Date.now().toString() };
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

  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={onSubmit}>
        <GridLayout>
          <Label title='Название'>
            <Input
              placeholder='Введите название'
              type='text'
              name='name'
              isRequired
            />
          </Label>
          <Label title='Жанр'>
            <Input placeholder='Введите жанр' type='text' name='genre' />
          </Label>
          <Label title='Год выпуска'>
            <Input
              placeholder='Введите год выпуска'
              type='number'
              name='year'
            />
          </Label>
          <Label title='Длительность'>
            <Input
              placeholder='Длительность в минутах'
              type='number'
              name='duration'
            />
          </Label>
          <Label title='Рецензия' className={s.review}>
            <Textarea name='review' />
          </Label>
          <Dropzone onSetCover={setCover} className={s.dropzone} />
          <div className={s.preview}>{cover && <Preview cover={cover} />}</div>
          <div className={s.buttons}>
            <Button type='submit' className={s.button}>
              {item ? 'Сохранить' : 'Добавить'}
            </Button>
            {item && (
              <Button
                type='button'
                className={cn(s.button, s.delete)}
                onClick={onDeleteMovie}
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
