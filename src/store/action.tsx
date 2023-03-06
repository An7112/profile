import { UserActionTypes, User, SET_USER } from "./types";

export const setUser = (user: User): UserActionTypes => {
    return {
        type: SET_USER,
        payload: user
    }
}