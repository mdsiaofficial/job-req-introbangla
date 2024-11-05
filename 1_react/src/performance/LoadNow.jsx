import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary"
const LazyComponent = lazy(() => import('./LazyComponent'));


function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again!</button>
    </div>
  );
}


const LoadNow = () => {

  return (
    <div>
      <ErrorBoundary
        fallbackRender={fallbackRender}
        onReset={() => {
          
        }}
      >
        <Suspense fallback={<p>Loading image...</p>}>
          <LazyComponent />
        </Suspense>
      </ErrorBoundary>

    </div>
  )
}
export default LoadNow;