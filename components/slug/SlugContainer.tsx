import { ISlugContainer } from '../../types/slugContainer';
import styles from '../../styles/Home.module.css'

function SlugContainer({ children }: ISlugContainer) {
  // return <div className={styles.slugContainer}>{children}</div>;
  return <div className="mx-auto w-[100%] max-w-[80rem] pb-8">{children}</div>;
}

export default SlugContainer;
