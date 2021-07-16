import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken, setUid, removeUid, getUid } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import md5 from 'js-md5'

export const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  uid: getUid(),
  nickname: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_UID: (state, uid) => {
    state.uid = uid
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    const md5Password = md5(password)
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: md5Password }).then(response => {
        commit('SET_TOKEN', response.token)
        commit('SET_UID', response.userInfoDto.uid)
        commit('SET_NICKNAME', response.userInfoDto.nickname)
        setToken(response.token)
        setUid(response.userInfoDto.uid)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.uid).then(response => {
        const { data } = response
        if (data === null) {
          reject('鉴权失败，请重新登陆')
        }
        const { uid, roles, username, avatar, introduction, nickname } = response
        // roles must be a non-empty array
        // if (!roles || roles.length <= 0) {
        //  reject('getInfo: roles must be a non-null array!')
        // }

        commit('SET_ROLES', roles)
        commit('SET_NAME', username)
        commit('SET_AVATAR', avatar)
        commit('SET_UID', uid)
        commit('SET_INTRODUCTION', introduction)
        commit('SET_NICKNAME', nickname)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_UID', '')
        removeToken()
        removeUid()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_UID', '')
      commit('SET_ROLES', [])
      removeToken()
      removeUid()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
