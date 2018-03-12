import React from 'react';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <section className="pv3 mt5 min-h bg-blue">
    <Helmet>
      <title>Careful Not to Cry | Contact</title>
    </Helmet>
    <div className="fluid-width w-100 center mv5 min-h">
      <h1 className="white f1 lh-title">NOT FOUND</h1>
      <p className="white f4 lh-copy">Not sure about this one.</p>
    </div>
  </section>
);

export default NotFoundPage;
