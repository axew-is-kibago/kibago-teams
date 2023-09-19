import { createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { ProfileCreate } from './pages/ProfileCreate';
import { Home } from './pages/Home';
import { EventCreate } from './pages/EventCreate';
import { Participant } from './pages/Participant';
import { Profile } from './pages/Profile';
import { CommunityInfo } from './pages/CommunityInfo';
import { Error } from './pages/Error';


export const router = createBrowserRouter([
    { path: "/", element: <Login />},
    { path: "/home", element: <Home/>},
    { path: "/profile_create", element: <ProfileCreate />},
    { path: "/event_create", element: <EventCreate />},
    { path: "/participant", element: <Participant />},
    { path: "/profile", element: <Profile />},
    { path: "/community_info", element: <CommunityInfo />},
    { path: "/*", element: <Error />},
]);
