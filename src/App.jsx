import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
