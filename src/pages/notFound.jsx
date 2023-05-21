import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <section>
        <span>This page does not exist! Please, go to</span>
        <Link to={'/'}> Home page </Link>
        <span>and try again.</span>
      </section>
    </>
  );
};

export default NotFound;
