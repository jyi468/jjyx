import { connect } from 'react-redux';
import Charts from './Charts';

const mapStateToProps = state => ({
    data: state.chart
});

export default connect(
    mapStateToProps
)(Charts)