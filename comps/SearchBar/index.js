import styles from './Search.module.css';
import { FaReact } from 'react-icons/fa';
import Link from 'next/link';

const SearchBar = ({ ...rest }) => {
  return (
    <>
      <Link href='https://cryptotrack-indol.vercel.app/'>
        <FaReact size={40} className={styles.icon} />
      </Link>

      <div className={styles.coin_search}>
        <input className={styles.coin_input} {...rest} />
      </div>
    </>
  );
};

export default SearchBar;
