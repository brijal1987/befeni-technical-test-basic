import ApolloClient from 'apollo-boost';
import { authenticationService } from '../services/authentication.service';

const { REACT_APP_TH_HIRE_API } = process.env;

const thHireApi = new ApolloClient({
  uri: `${REACT_APP_TH_HIRE_API}`,
  request: (operation) => {
    const token = authenticationService.getCurrentUser && authenticationService.getCurrentUser.token ? authenticationService.getCurrentUser.token : '';
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : 'none',
      },
    });
  },
});
export default thHireApi;
