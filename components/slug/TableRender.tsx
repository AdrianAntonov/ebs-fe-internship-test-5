import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { ISlug } from '../../types/slug';
const PartnersBlocks = dynamic(() => import('./PartnersBlocks'));
const PartnersTable = dynamic(() => import('./PartnersTable'));
const AdminsBlocks = dynamic(() => import('./AdminsBlocks'));
const AdminsTable = dynamic(() => import('./AdminsTable'));

function TableRender({ data }: ISlug) {
const [w,setW] = useState(0)

  useEffect(() => {
    const { innerWidth } = globalThis.window;
  setW(innerWidth)
  }, []);

  return (
    <div>
      {/* --------  Se va transcrie pe Tailwind -------- */}
      {w > 710 ? (
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
