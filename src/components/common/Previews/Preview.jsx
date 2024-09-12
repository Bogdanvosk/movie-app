import s from './Preview.module.scss';

const Preview = ({ cover }) => {
  return (
    <div className={s.wrapper}>
      <img className={s.thumb} src={cover.preview} />
    </div>
  );
};

export default Preview;
