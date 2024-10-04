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
import { formInputs } from '../../../constants';
import { useModalContext } from '../ModalPovider/ModalPovider';

import GridLayout from '../GridLayout/GridLayout';
import Label from '../Label/Label';
import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Dropzone from '../Dropzone/Dropzone';

import s from './Form.module.scss';

const Form = () => {
  const {
    hideModal,
    store: { modalProps },
  } = useModalContext();
  const item = modalProps?.item || null;

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
    hideModal();
  });

  const onDeleteMovie = () => {
    dispatch(deleteMovieAction(item.id));

    window.localStorage.removeItem('form');
    hideModal();
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
      <form className={s.form} onSubmit={onSubmit}>
        <GridLayout>
          {formInputs.map((input) => {
            return (
              <Label
                key={input.fieldName}
                title={input.title}
                fieldName={input.fieldName}
                className={input.fieldName === 'review' ? s.review : ''}
              >
                {input.fieldName === 'review' ? (
                  <Textarea fieldName='review' />
                ) : (
                  <Input
                    placeholder={input.placeholder}
                    type={input.type}
                    fieldName={input.fieldName}
                  />
                )}
              </Label>
            );
          })}

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
