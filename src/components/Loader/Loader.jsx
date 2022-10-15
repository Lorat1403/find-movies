import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <ThreeDots
        height="70"
        width="70"
        radius="9"
        color="violet"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
