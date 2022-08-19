import useWindowDimensions from '../../hooks/useWindowDimensions';
import PartnersBlocks from './PartnersBlocks';
import PartnersTable from './PartnersTable';
import AdminsBlocks from './AdminsBlocks';
import AdminsTable from './AdminsTable';
import { ISlug } from '../../types/slug';

interface ITableRender {
  slug: ISlug;
}

function TableRender({ slug }: ITableRender) {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width > 710 ? (
        <div>
          <AdminsTable slug={slug} />
          <PartnersTable slug={slug} />
        </div>
      ) : (
        <div>
          <AdminsBlocks slug={slug} />
          <PartnersBlocks slug={slug} />
        </div>
      )}
    </div>
  );
}

export default TableRender;
