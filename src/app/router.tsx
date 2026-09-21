import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage/HomePage';
import SubjectPage from '../pages/SubjectPage/SubjectPage';
import ChapterPage from '../pages/ChapterPage/ChapterPage';
import BookmarksPage from '../pages/BookmarksPage/BookmarksPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

/**
 * Data-Driven Routing System
 * Dynamic parameter-based routes ensure that adding new subjects or chapters
 * does NOT require modifying the router configuration.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'subject/:subjectId',
        element: <SubjectPage />,
      },
      {
        path: 'chapter/:subjectId/:chapterId',
        element: <ChapterPage />,
      },
      {
        path: 'bookmarks',
        element: <BookmarksPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
