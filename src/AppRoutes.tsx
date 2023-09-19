import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/Signup';
import { SignIn } from './pages/Signin'
import { ProfileCreate } from './pages/ProfileCreate';
import { Home } from './pages/Home';
import { Comunities } from './pages/Communities';
import { Chat } from './pages/Chat';
import { Participant } from './pages/Participant';
import { Profile } from './pages/Profile';
import { CommunityInfo } from './pages/CommunityInfo';
import { Error } from './pages/Error';

export const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/signup", element: <SignUp />},
    { path: "/signin", element: <SignIn />},
    { path: "/profile_create", element: <ProfileCreate />},
    { path: "/communities", element: <Comunities />},
    { path: "communities/chat", element: <Chat />},
    { path: "communities/chat/participant", element: <Participant />},
    { path: "communities/chat/participant/profile", element: <Profile />},
    { path: "/community_info", element: <CommunityInfo />},
    { path: "/*", element: <Error />},
]);