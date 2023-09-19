import { createBrowserRouter } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Login } from './components/pages/Login';
import { ProfileCreate } from './components/pages/Home/ProfileCreate';
import { Comunities } from './components/pages/Home/Communities/Communities';
import { Chat } from './components/pages/Home/Communities/Chat';
import { Participant } from './components/pages/Home/Communities/Participant';
import { Profile } from './components/pages/Home/Communities/Profile';
import { CommunityInfo } from './components/pages/Home/CommunityInfo';

export const router = createBrowserRouter([
    { path: "/", element: <Login />},
    { path: "/home", element: <Home />},
    { path: "/profile_create", element: <ProfileCreate />},
    { path: "/communities", element: <Comunities />},
    { path: "communities/chat", element: <Chat />},
    { path: "communities/chat/participant", element: <Participant />},
    { path: "communities/chat/participant/profile", element: <Profile />},
    { path: "/community_info", element: <CommunityInfo />},
]);