import dynamic from 'next/dynamic';
import { ISlug } from '../../types/slug';
const PartnersBlocks = dynamic(() => import('./PartnersBlocks'));
const PartnersTable = dynamic(() => import('./PartnersTable'));
const AdminsBlocks = dynamic(() => import('./AdminsBlocks'));
const AdminsTable = dynamic(() => import('./AdminsTable'));

function TableRender({ data }: ISlug) {
  const { innerWidth } = globalThis.window;

  return (
    <div>
      {/* --------  Se va transcrie pe Tailwind -------- */}
      {innerWidth > 710 ? (
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
