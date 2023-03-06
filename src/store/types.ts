export const SET_USER = 'SET_USER';

export interface User {
    id: string;
    name: string;
}

export interface UserState {
    user: User | null;
}

interface SetUserAction {
    type: typeof SET_USER;
    payload: User;
}

export type UserActionTypes = SetUserAction;