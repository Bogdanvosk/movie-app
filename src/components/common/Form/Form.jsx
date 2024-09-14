import { FormProvider, useForm } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { addMovie } from '../../../store/features/movies';

import GridLayout from '../GridLayout/GridLayout';
import Label from '../Label/Label';
import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import Dropzone from '../Dropzone/Dropzone';
import Preview from '../Previews/Preview';
import Button from '../Button/Button';

import s from './Form.module.scss';

const Form = ({ close }) => {
  const [cover, setCover] = useState(null);
  const methods = useForm();
  const dispatch = useDispatch();

  const onSubmit = methods.handleSubmit((data) => {
    const newMovie = { ...data, cover, id: Date.now() };

    

    dispatch(addMovie(newMovie));
    close();
  });

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
          <Button type='submit' className={s.button}>
            Создать
          </Button>
        </GridLayout>
      </form>
    </FormProvider>
  );
};

export default Form;

Form.propTypes = {
  close: PropTypes.func,
};
