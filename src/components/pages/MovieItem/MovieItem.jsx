import { useParams } from 'react-router-dom';

const MovieItem = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default MovieItem;
