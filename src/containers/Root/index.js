import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../Header';
import './index.less';

export default ({ route, match }) => {
  console.log(match);
  return (
    <React.Fragment>
      <Header />
      <div className="Root-body">
        {renderRoutes(route.routes)}
      </div>
    </React.Fragment>
  );
};

// export default ({ route, match }) => {
//   console.log(match);
//   return (
//     <React.Fragment>
//       {renderRoutes(route.routes)}
//     </React.Fragment>
//   );
// };
