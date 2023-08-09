// auth.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      try {
        const response = await this.$axios.post("/login", {
          email,
          password,
        });

        this.token = response.data.token;
        localStorage.setItem("token", this.token);
      } catch (error) {
        throw new Error("Credenciales inválidas");
      }
    },
    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});
