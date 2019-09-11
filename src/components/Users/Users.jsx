import React from 'react';
import Pagination from "../../common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <Pagination currentPage={props.currentPage}
                        arrCountPage={props.arrCountPage}
                        countPagePart={props.countPagePart}
                        partSize={props.pageSize}
                        onChangePage={props.onChangePage}/>
            <User users={props.users}
                  followUnfollowUser={props.followUnfollowUser}
                  subscribedUsers={props.subscribedUsers}/>
        </div>
    )
}

export default Users;
