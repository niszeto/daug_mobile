import { StackNavigator } from 'react-navigation';

import ProfilePage from '../screens/ProfileScreen';
import PostDetails from '../screens/PostDetailScreen';
import EditProfile from '../screens/EditProfileScreen';
import IntroStack from './IntroStack'

export default StackNavigator({
  Profile: {
    screen: ProfilePage
  },

  Post: {
    screen: PostDetails
  },
}, {
  initialRouteName: 'Profile',
  mode: 'modal',
  headerMode: 'none'
}
);