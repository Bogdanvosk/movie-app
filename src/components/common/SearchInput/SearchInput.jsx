import { useEffect, useState } from 'react';
import cn from 'classnames';

import { useDispatch } from 'react-redux';
import useDebounce from '../../../hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';
import { searchMoviesAction } from '../../../store/features/movies';

import Icon from '../Icon/Icon';

import s from './SearchInput.module.scss';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState(
    window.localStorage.getItem('search') || ''
  );
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const debounceValue = useDebounce(searchValue, 400).trim();

  useEffect(() => {
    const val = searchValue.trim();
    dispatch(searchMoviesAction(val));

    searchValue !== '' ? setSearchParams({ search: val }) : setSearchParams({});
  }, [debounceValue.trim()]);

  const handleInput = (e) => {
    setSearchValue(e.target.value);
    window.localStorage.setItem('search', e.target.value);
  };

  const handleClearInput = () => {
    setSearchValue('');
    window.localStorage.removeItem('search');
  };

  return (
    <div className={s.wrapper}>
      <Icon className={s.icon} name='search' />
      <input
        value={searchValue}
        onChange={handleInput}
        className={s.input}
        type='text'
        placeholder='Поиск'
      />
      <span
        className={cn(s.close, { [s.show]: searchValue })}
        onClick={handleClearInput}
      ></span>
    </div>
  );
};

export default SearchInput;
