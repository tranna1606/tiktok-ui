//Layouts
import { HeaderOnly } from '~/components/Layout';
//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { lazy } from 'react';
import routesConfig from '~/config/routes';
//kh cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];
//cần đăng nhập mới được xem
const privateRoutes = [];
export { publicRoutes, privateRoutes };
