import React from 'react';
import { connect } from 'react-redux';
import TopPage from '../pages/topPage/TopPage';
import { setCurrentPage } from './routerAction';

const renderPage = (currentPage) => {
  switch (currentPage) {
    case 'start': return <TopPage />;
    default: return <TopPage />;
  }
};

const Router = (props) => (
  <div>
    { renderPage(props.currentPage) }
  </div>
);

const mapStateToProps = (state) => ({
  currentPage: state.router.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  onDestroyed: () => {
    dispatch(setCurrentPage('score'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);
