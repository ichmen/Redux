import Options from './Options';
import { connect } from 'react-redux';
import { selectedListSelector } from './options.selector';
import { selectedToggle } from '../App';

const mapState = state => {
  return {
    options: selectedListSelector(state),
    title: 'Selected options',
  };
};

const mapProps = {
  moveOption: selectedToggle,
};

export default connect(mapState, mapProps)(Options);
