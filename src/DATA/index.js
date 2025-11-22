import { createStore } from "vuex";
import tartu1 from "../assets/photos/tartu1.jpg";
import tartu2 from "../assets/photos/tartu2.jpg";
import tartu3 from "../assets/photos/tartu3.jpg";
import tartu4 from "../assets/photos/tartu4.jpg";
import tartu5 from "../assets/photos/tartu5.jpg";
import tartu6 from "../assets/photos/tartu6.jpg";
import tartu7 from "../assets/photos/tartu7.jpg";
import tartu8 from "../assets/photos/tartu8.jpg";
import tartu9 from "../assets/photos/tartu9.jpg";


export default createStore({
  state() {
    return {
      posts: [
        { id: 1, title: "Post 1", body: "This is post 1", picture: tartu1 },
        { id: 2, title: "Post 2", body: "This is post 2", picture: tartu2 },
        { id: 3, title: "Post 3", body: "This is post 3", picture: tartu3 },
        { id: 4, title: "Post 4", body: "This is post 4", picture: tartu4 },
        { id: 5, title: "Post 5", body: "This is post 5", picture: tartu5 },
        { id: 6, title: "Post 6", body: "This is post 6", picture: tartu6 },
        { id: 7, title: "Post 7", body: "This is post 7", picture: tartu7 },
        { id: 8, title: "Post 8", body: "This is post 8", picture: tartu8 },
        { id: 9, title: "Post 9", body: "This is post 9", picture: tartu9 },
        { id: 10, title: "Post 10", body: "This is post 10", picture: tartu1 }
      ]
    };
  }
});