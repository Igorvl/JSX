// import React from 'react';
import {followAC, getUsersAC, unfollowAC} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = (state) => {
	return ({
		usersData: state.usersPage.usersData
	})
};
const mapDispatchToProps = (dispatch) => {
	return (
		{
			// callbacks for buttons from Users
			followCB: userId => dispatch(followAC(userId)),
			unfollowCB: userId => dispatch(unfollowAC(userId)),
			getUsersCB: () => dispatch(getUsersAC()),
		}
	)
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
