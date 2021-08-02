import React from "react";
import { connect } from "react-redux";

const Loading = (state) => {
  const { IsLoading } = state;
  if (!IsLoading) {
    return null;
  }
  return <div>Loading...</div>;
};
const mapStateToProps = (state) => {
  const { IsLoading } = state;
  return { IsLoading };
};

export default connect(mapStateToProps)(Loading);
