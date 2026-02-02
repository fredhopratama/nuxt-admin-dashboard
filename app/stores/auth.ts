import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: ''
  }),

  actions: {
    login(username: string) {
      this.isLoggedIn = true
      this.user = username
    },

    logout() {
      this.isLoggedIn = false
      this.user = ''
    }
  }
})
