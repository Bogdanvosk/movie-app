import useScreenWidth from '../../../hooks/useScreenWidth';

import s from './Preview.module.scss';

const Preview = ({ cover }) => {
  const screenWidth = useScreenWidth();

  return (
    <div className={s.wrapper}>
      {screenWidth > 640 ? (
        <img className={s.thumb} src={cover.src} />
      ) : (
        <span className={s.name}>{cover.name}</span>
      )}
    </div>
  );
};

export default Preview;
