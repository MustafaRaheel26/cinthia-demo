import { User, UserRole } from '../types';

const AUTH_KEY = 'smartcafe_auth_user';

export const authService = {
  login: (email: string, password: string): User | null => {
    // Demo credentials
    const credentials: Record<string, { pass: string; role: UserRole; name: string }> = {
      'admin@democafe.com': { pass: 'admin123', role: 'admin', name: 'System Admin' },
      'owner@democafe.com': { pass: 'owner123', role: 'owner', name: 'Restaurant Owner' },
      'user@democafe.com': { pass: 'user123', role: 'user', name: 'John Doe' },
    };

    const userEntry = credentials[email];
    if (userEntry && userEntry.pass === password) {
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: userEntry.name,
        role: userEntry.role,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEntry.name}`
      };
      localStorage.setItem(AUTH_KEY, JSON.stringify(user));
      return user;
    }
    return null;
  },

  signup: (name: string, email: string, password: string, role: UserRole = 'user'): User => {
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    return user;
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  },

  getCurrentUser: (): User | null => {
    const userJson = localStorage.getItem(AUTH_KEY);
    if (userJson) {
      try {
        return JSON.parse(userJson);
      } catch (e) {
        return null;
      }
    }
    return null;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(AUTH_KEY);
  }
};
