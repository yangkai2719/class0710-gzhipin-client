import {connect} from 'react-redux';

import LaobanInfo from '../components/laoban-info';

import {undateUserInfo} from '../redux/actions';


export default connect(
  state => ({user: state.user}),
  {updateUserInfo}
)(laobanInfo)