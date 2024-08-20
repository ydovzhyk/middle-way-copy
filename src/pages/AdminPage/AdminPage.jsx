import Admin from '../../components/Admin/Admin';
import { useHeaderHeight } from '../../components/helpers/HeaderContext/HeaderContext';

const AdminPage = () => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <div style={{ paddingTop: `${headerHeight}px` }}>
        <Admin />
      </div>
    </>
  );
};

export default AdminPage;
