import dynamic from 'next/dynamic';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { ISlug } from '../../types/slug';
const PartnersBlocks = dynamic(() => import('./PartnersBlocks'));
const PartnersTable = dynamic(() => import('./PartnersTable'));
const AdminsBlocks = dynamic(() => import('./AdminsBlocks'));
const AdminsTable = dynamic(() => import('./AdminsTable'));

function TableRender({ data }: ISlug) {
 
  const {width} = useWindowDimensions()


  return (
    <div>
      {/* --------  Se va transcrie pe Tailwind -------- */}
      {width > 710 ? (
        <div>
          <AdminsTable data={data} />
          <PartnersTable data={data} />
        </div>
      ) : (
        <div>
          <AdminsBlocks data={data} />
          <PartnersBlocks data={data} />
        </div>
      )}
    </div>
  );
}

export default TableRender;
