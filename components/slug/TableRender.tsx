import useWindowDimensions from '../../hooks/useWindowDimensions';
import PartnersBlocks from './PartnersBlocks';
import PartnersTable from './PartnersTable';
import AdminsBlocks from './AdminsBlocks';
import AdminsTable from './AdminsTable';

function TableRender({ slug }) {
  const { width } = useWindowDimensions();
  // console.log(typeof width);

  return (
    <div>
      {width > 710 ? (
        <div>
          <AdminsTable people={slug} />
          <PartnersTable people={slug} />
        </div>
      ) : (
        <div>
          <AdminsBlocks people={slug} />
          <PartnersBlocks people={slug} />
        </div>
      )}
    </div>
  );
}

export default TableRender;
