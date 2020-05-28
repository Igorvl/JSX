// import React from 'react';
import {followAC, getUsersAC, unfollowAC} from "../../Redux/usersReducer";
import {connect} from "react-redux";
// import Users from "./Users";
// import UsersC from "./UsersC";
import UsersH from "./UsersH";

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
			getUsersCB: usersData => dispatch(getUsersAC(usersData)),
		}
	)
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersH);

