import MovieDetals from './component/MovieDetals.vue';
import ListOfMovie from './component/ListOfMovie.vue';
import User from './userComponent/User';
import AccConfirm from './userComponent/AccConfirm.vue';
import HomeComponent from './component/HomeComponent';
import userPictire from './userComponent/userPicture';


export const routes =[
    {path : '', component : ListOfMovie },
    {path : '/movie/:id',component: MovieDetals , name: "movieDetails"},
    {path : '/user',component: User },
    {path : '/activation/:id',component: AccConfirm },
    {path : '/home',component: HomeComponent },
    {path : '/userPhoto',component: userPictire },
    
];