import { observable, action, computed } from "mobx"
import Cookies from "js-cookie"
import { login, logout, fecthMe } from "../service/auth"

export class AuthenticationStore {
  @observable user = null

  @computed get currentUser() {
    return this.user
  }

  @computed get is_auth() {
    const accessToken = Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME)
    return accessToken
  }

  @action async me() {
    try {
      const { data } = await fecthMe()
      this.setCurrentUser(data)
      return data
    } catch (error) {
      if (error.response.status === 401) {
        this.romoveToken()
        window.location.href = "/"
      }
    }
  }

  @action setCurrentUser(user) {
    this.user = user
  }

  @action async signOut() {
    this.user = null
    this.romoveToken()
    window.location.reload()
  }

  @action romoveToken() {
    Cookies.remove(process.env.REACT_APP_ACCESS_TOKEN_NAME)
  }
}
