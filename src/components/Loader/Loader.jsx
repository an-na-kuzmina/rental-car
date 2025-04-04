import PulseLoader from 'react-spinners/PulseLoader';
import s from './Loader.module.css';
const Loader = () => (
  <div className={s.load}>
    <PulseLoader color="#3470ff" />
  </div>
);

export default Loader;
