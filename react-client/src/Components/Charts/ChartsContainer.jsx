import { connect } from 'react-redux';
import Charts from './Charts';

const mapStateToProps = state => ({
    data: state.grid.coins,
    pageNumber: state.grid.pageNumber,
    maxPage: state.grid.maxPage
});

export default connect(
    mapStateToProps
)(Grid)