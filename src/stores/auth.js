// auth.js
import http from "@/plugins/axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("Andejecruher") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password, rememberMe) {
      try {
        const response = await http.post("/login", {
          email,
          password,
        });

        const { data } = response;

        const Andejecruher = {
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          token_type: data.token_type,
        };

        localStorage.setItem("Andejecruher", JSON.stringify(Andejecruher));
      } catch (error) {
        localStorage.removeItem("Andejecruher");
        throw new Error(error);
      }
    },
    async register(body) {
      try {
        await http.post("/register", body);
      } catch (error) {
        throw new Error(error);
      }
    },
    async forgotPassword(email) {
      try {
        await http.post("/forgot-password", { email });
      } catch (error) {
        throw new Error(error);
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem("Andejecruher");
    },
  },
});
