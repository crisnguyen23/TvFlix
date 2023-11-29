import {
  HomePage,
  MovieHotHomePage,
  MovieGenrePage,
  MovieSearchPage,
  MovieDetailPage,
  PageNotFound,
} from "@/pages";
import { UpdatePasswordLayout } from "@/components";

const publicRoutes = [
  {
    path: "/TvFlix/",
    component: HomePage,
  },
  {
    path: "/TvFlix/movie/all/:path/:title",
    component: MovieHotHomePage,
  },
  {
    path: "/TvFlix/movie/:genre/:id",
    component: MovieGenrePage,
  },
  {
    path: "/TvFlix/movie/search/:keyword",
    component: MovieSearchPage,
  },
  {
    path: "/TvFlix/movie/detail/:id",
    component: MovieDetailPage,
  },
  {
    path: "/TvFlix/update-password",
    component: UpdatePasswordLayout,
    layout: null,
  },
  {
    path: "/*",
    component: PageNotFound,
  },
];

const privateRoutes = []; //private for admin (or routes for user VIP)

export { publicRoutes, privateRoutes };
