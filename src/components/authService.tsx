// src/components/authService.ts
import { Auth } from 'aws-amplify';

// Function to sign up a new user
export const signUp = async (email: string, password: string): Promise<any> => {
  return Auth.signUp({
    username: email,
    password,
    attributes: {
      email,
    },
  });
};

// Function to log in an existing user
export const login = async (email: string, password: string): Promise<any> => {
  return Auth.signIn(email, password);
};

// Function to log out the currently logged-in user
export const logout = async (): Promise<void> => {
  return Auth.signOut();
};

// Function to check if a user is authenticated
export const isAuthenticated = async (): Promise<boolean> => {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return false;
  }
};
