import { useHeaderHeight } from '../../components/helpers/HeaderContext/HeaderContext';

import Camp from '../../components/Camp/Camp';

const CampPage = () => {
  const headerHeight = useHeaderHeight();

  return (
    <div style={{ paddingTop: `${headerHeight}px` }}>
      <Camp />
    </div>
  );
};

export default CampPage;
