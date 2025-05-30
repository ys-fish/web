import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
interface UserStteI {
  user: Ref<any>;
  IsLogin: Ref<Boolean>;
  Token: Ref<String>;
}

export const AutoStore = defineStore("AutoStore", {
  state: (): UserStteI => ({
    user: ref<any>(),
    IsLogin: ref<boolean>(false),
    Token: ref<string>(""),
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
    },
    setIsLogin(login: boolean) {
      this.IsLogin = login;
    },
    setToken(token: string) {
      this.Token = token;
    },
    getToken(): String {
      return this.Token;
    },
    clearToken() {
      this.Token = "";
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});
