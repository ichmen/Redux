import Options from './Options';
import { connect } from 'react-redux';
import { availableListSelector } from './options.selector';
import { selectedToggle } from '../App';

const mapState = state => {
  return {
    options: availableListSelector(state),
    title: 'Available options',
  };
};

const mapProps = { moveOption: selectedToggle };

export default connect(mapState, mapProps)(Options);
