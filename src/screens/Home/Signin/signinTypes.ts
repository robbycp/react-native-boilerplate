import {AuthMethod} from '~/types/user';

export interface SigninViewProps {
  handleSignin: (method: AuthMethod) => void;
  handleSignout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}
