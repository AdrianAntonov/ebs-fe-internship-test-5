import useWindowDimensions from '../../hooks/useWindowDimensions';
import PartnersBlocks from './PartnersBlocks';
import PartnersTable from './PartnersTable';
import AdminsBlocks from './AdminsBlocks';
import AdminsTable from './AdminsTable';
import { ISlug } from '../../types/slug';



function TableRender({ data }: ISlug) {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width > 710 ? (
        <div>
          <AdminsTable slug={data} />
          <PartnersTable slug={data} />
        </div>
      ) : (
        <div>
          <AdminsBlocks slug={data} />
          <PartnersBlocks slug={data} />
        </div>
      )}
    </div>
  );
}

export default TableRender;
