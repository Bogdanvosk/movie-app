import { useState } from 'react';
import Icon from '../Icon/Icon';

import s from './Search.module.scss';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInput = (e) => {
    setSearchValue(e.target.value);
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
    </div>
  );
};

export default SearchInput;
