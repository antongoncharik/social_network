import React, {useState} from "react";
import s from "./Pagination.module.css";
import arrowLeft from '../resource/img/arrow_left.png';
import arrowRight from '../resource/img/arrow_right.png';

const Pagination = ({arrCountPage, currentPage, countPagePart, partSize, onChangePage}) => {
    let [currentPart, setCurrentPart] = useState(Math.ceil(currentPage / partSize));
    let leftBorderPart = partSize * currentPart - partSize + 1;
    let rightBorderPart = partSize * currentPart;

    return (
        <div className={s.pageBlock}>
            {currentPart > 1 && <div className={s.prevArrow} onClick={(e) => {
                setCurrentPart(currentPart - 1);
                onChangePage(partSize * (currentPart - 1) - partSize + 1);
            }}><img src={arrowLeft}></img></div>}
            {arrCountPage.filter(item => {
                return item >= leftBorderPart && item <= rightBorderPart
            }).map(page => (
                <span key={page}
                      className={page === currentPage ? s.selectedPageBlock : s.cellPage}
                      onClick={(e) => {
                          onChangePage(page)
                      }}>{page}
                </span>))}
            {currentPart < countPagePart && <div className={s.nextArrow} onClick={(e) => {
                setCurrentPart(currentPart + 1);
                onChangePage(partSize * (currentPart + 1) - partSize + 1);
            }}><img src={arrowRight}></img></div>}
        </div>)
}

export default Pagination;