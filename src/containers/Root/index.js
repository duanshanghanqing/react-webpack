import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '../Header';

export default ({ route, match }) => {
  console.log(match);
  return (
    <React.Fragment>
      <Header />
      {renderRoutes(route.routes)}
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
