import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({arrCountPage, currentPage, onChangePage}) => {
    return (
        <div className={s.pageBlock}>
            {arrCountPage.map(page => (
                <span key={page} className={page === currentPage ? s.selectedPageBlock : ''}
                      onClick={(e) => {onChangePage(page)}}>{page}
                </span>))}
        </div>)
}

export default Pagination;