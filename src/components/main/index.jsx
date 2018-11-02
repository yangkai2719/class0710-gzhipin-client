import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo  from '../dashen-infn';


class Main extends Component {
  render () {
    return (
      <div>
        <switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>
          <Route path="/dashenInfo" component={DashenInfo}/>

        </switch>
      </div>

    )
  }
}

export default Main;