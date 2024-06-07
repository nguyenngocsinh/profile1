import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/sign-in';
import Home from './pages/home';
import SignUp from './pages/sign-up';
import ErrorPage from './pages/error';
import Article from './pages/article';
import MainLayout from './layout/main-layout';
import Map from './pages/map';
import APP_PATH from './constants/app-path';
import UserProfile from './pages/user-profile';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={APP_PATH['sign-in']} element={<SignIn />} />
          <Route path={APP_PATH['sign-up']} element={<SignUp />} />
          <Route path={APP_PATH.home} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={APP_PATH.article} element={<Article />} />
            <Route path={APP_PATH.map} element={<Map />} />
            <Route path={APP_PATH.userprofile} element={<UserProfile />} />
          </Route>
          <Route path={APP_PATH.error} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
