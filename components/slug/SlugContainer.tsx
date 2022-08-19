import styles from '../../styles/Home.module.css';
import { ISlugContainer } from '../../types/slugContainer';

function SlugContainer({ children }: ISlugContainer) {
  return <div className={styles.slugContainer}>{children}</div>;
}

export default SlugContainer;
