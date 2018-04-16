import React from 'react';
import { ScreeningTemplate } from '../../templates/screening';

const ScreeningPreview = ({ entry, widgetFor }) => (
  <ScreeningTemplate
    // content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default ScreeningPreview;
