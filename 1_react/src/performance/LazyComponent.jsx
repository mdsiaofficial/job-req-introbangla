import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));
export default LazyComponent;