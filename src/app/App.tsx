import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from './providers/ThemeProvider';
import { BookmarkProvider } from './providers/BookmarkProvider';
import { ProgressProvider } from './providers/ProgressProvider';
import { GlobalErrorBoundary } from '../components/common/ErrorBoundary/GlobalErrorBoundary';

export const App: React.FC = () => {
  return (
    <GlobalErrorBoundary>
      <ThemeProvider>
        <ProgressProvider>
          <BookmarkProvider>
            <RouterProvider router={router} />
          </BookmarkProvider>
        </ProgressProvider>
      </ThemeProvider>
    </GlobalErrorBoundary>
  );
};

export default App;

