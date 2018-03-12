import CMS from 'netlify-cms';
import 'netlify-cms/dist/cms.css';

import ScreeningPreview from './preview-templates/ScreeningPreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('screenings', ScreeningPreview);
