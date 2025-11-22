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
        { id: 1, title: "22 Okt 2022", body: "This is Tartu on beautiful spring day next to Emajõgi. Flowers are blooming and water is bright", picture: tartu1, likes: 0 },
        { id: 2, title: "23 Okt 2022", body: "The banks of the Emajõgi River offer peace and beauty for walks and relaxation.", picture: tartu2, likes: 0 },
        { id: 3, title: "31 Okt 2022", body: "The heart of the city is Town Hall Square with its historic charm.", picture: tartu3, likes: 0 },
        { id: 4, title: "01 Dets 2022", body: "The city is full of parks and greenery, making it a pleasant place to live.", picture: tartu4, likes: 0 },
        { id: 5, title: "22 Jan 2023", body: "The University of Tartu Library tower is a symbol of the city and a favorite for photographers.", picture: tartu5, likes: 0 },
        { id: 6, title: "23 Jan 2023", body: "The Vanemuine Theatre offers diverse cultural experiences every season.", picture: tartu6, likes: 0 },
        { id: 7, title: "24 Jan 2023", body: "Aparaaditehas cultural center blends art, music, and creativity", picture: tartu7, likes: 0 },
        { id: 8, title: "26 Jan 2023", body: "Tartu’s cafés and small restaurants create a friendly and cozy atmosphere", picture: tartu8, likes: 0 },
        { id: 9, title: "27 Jan 2023", body: "The city surprises with street art and modern architecture that enrich its skyline.", picture: tartu9, likes: 0 },
        { id: 10, title: "27 Jan 2023", body: "This is Tartu on beautiful spring day next to Emajõgi. Flowers are blooming and water is bright", picture: tartu1, likes: 0 }
      ]
    };
  },
  getters: {
    allPosts: (s) => s.posts
  },
  mutations: {
    INCREMENT_LIKE(state, postId) {
      const p = state.posts.find(x => x.id === postId)
      if (p) p.likes++
    },
    RESET_LIKES(state) {
      state.posts.forEach(p => (p.likes = 0))
    }
  },
  actions: {
    likePost({ commit }, postId) { commit('INCREMENT_LIKE', postId) },
    resetAllLikes({ commit }) { commit('RESET_LIKES') }
  }
});