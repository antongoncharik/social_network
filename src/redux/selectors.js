import {createSelector} from "reselect";

export const getUsersOfState = (state) => {
    return state.usersPage.users;
}

export const getUsersOfStateReselect = createSelector(getUsersOfState,
    (users) => {
        return users;
    }
)

export const getCurrentPageOfState = (state) => {
    return state.usersPage.currentPage;
}

export const getPageSizeOfState = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCountUsersOfState = (state) => {
    return state.usersPage.totalCountUsers;
}

export const getIsFetchingDataOfState = (state) => {
    return state.usersPage.isFetchingData;
}

export const getSubscribedUsersOfState = (state) => {
    return state.usersPage.subscribedUsers;
}