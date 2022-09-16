import { ISlugContainer } from '../../types/slugContainer';

function Container({ children }: ISlugContainer) {
  return <div className="mx-auto w-[100%] max-w-[80rem] pb-8">{children}</div>;
}

export default Container;
