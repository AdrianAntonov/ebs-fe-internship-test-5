import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { ISlug } from '../../types/slug';
import useWindowDimensions from 'hooks/useWindowDimensions';
const PartnersBlocks = dynamic(() => import('./PartnersBlocks'));
const PartnersTable = dynamic(() => import('./PartnersTable'));
const AdminsBlocks = dynamic(() => import('./AdminsBlocks'));
const AdminsTable = dynamic(() => import('./AdminsTable'));

function TableRender() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const { data }: ISlug = useQuery(['data', {id: router.query?.slug}]);

  return (
    <div>
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
