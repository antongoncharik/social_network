import React, {useState} from "react";
import s from "./Pagination.module.css";

const Pagination = ({arrCountPage, currentPage, countPagePart, partSize, onChangePage}) => {
    let [currentPart, setCurrentPart] = useState(Math.ceil(currentPage / partSize));
    let leftBorderPart = partSize * currentPart - partSize + 1;
    let rightBorderPart = partSize * currentPart;

    return (
        <div className={s.pageBlock}>
            {currentPart > 1 && <button onClick={(e) => {
                setCurrentPart(currentPart - 1);
                onChangePage(partSize * (currentPart - 1) - partSize + 1);
            }}>prev</button>}
            {arrCountPage.filter(item => {
                return item >= leftBorderPart && item <= rightBorderPart
            }).map(page => (
                <span key={page}
                      className={page === currentPage ? s.selectedPageBlock : ''}
                      onClick={(e) => {
                          onChangePage(page)
                      }}>{page}
                </span>))}
            {currentPart < countPagePart && <button onClick={(e) => {
                setCurrentPart(currentPart + 1);
                onChangePage(partSize * (currentPart + 1) - partSize + 1);
            }}>next</button>}
        </div>)
}

export default Pagination;