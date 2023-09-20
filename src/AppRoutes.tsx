import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/Signup';
import { SignIn } from './pages/Signin'
import { ProfileCreate } from './pages/ProfileCreate';
import { Home } from './pages/Home';
import { EventCreate } from './pages/EventCreate';
import { Participant } from './pages/Participant';
import { Profile } from './pages/Profile';
import { MyEventInfo } from './pages/MyEventInfo';
import { Error } from './pages/Error';


export const router = createBrowserRouter([
    { path: "/", element: <Home/>},
    { path: "/signup", element: <SignUp />},
    { path: "/signin", element: <SignIn />},
    { path: "/profile_create", element: <ProfileCreate />},
    { path: "/event_create", element: <EventCreate />},
    { path: "/participant", element: <Participant />},
    { path: "/profile", element: <Profile />},
    { path: "/myevent_info", element: <MyEventInfo />},
    { path: "/*", element: <Error />},
]);