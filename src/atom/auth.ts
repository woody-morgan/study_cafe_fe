import { atom, DefaultValue, selector } from 'recoil';

export interface UserAuthInfoType {
  isLoggedIn: boolean;
  id: string | null;
  name: string | null;
  email: string | null;
  avatar: string | null;
  notifications: string[] | null;
}

const defaultState: UserAuthInfoType = {
  isLoggedIn: false,
  id: null,
  name: null,
  email: null,
  avatar: null,
  notifications: null,
};

const authStateAtom = atom<UserAuthInfoType>({
  key: 'authStateAtom',
  default: defaultState,
});

const loginSelector = selector<Omit<UserAuthInfoType, 'isLoggedIn'>>({
  key: 'authStateAtom/login',
  get: ({ get }) => {
    return get(authStateAtom);
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(authStateAtom, defaultState);
    } else {
      if (
        newValue.id &&
        newValue.name &&
        newValue.email &&
        newValue.avatar &&
        newValue.notifications
      ) {
        set(authStateAtom, {
          isLoggedIn: true,
          id: newValue.id,
          name: newValue.name,
          email: newValue.email,
          avatar: newValue.avatar,
          notifications: newValue.notifications,
        });
      }
    }
  },
});

const logoutSelector = selector<void>({
  key: 'authStateAtom/logout',
  get: ({ get }) => {
    return;
  },
  set: ({ set }) => {
    set(authStateAtom, defaultState);
  },
});

export { authStateAtom, loginSelector, logoutSelector };
