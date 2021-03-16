import React from 'react';
import './styles/Pagination.css';

function Pagination(props: { pageNum: number, pageLimit: number, pageStart: number, pageEnd: number, channelsFilter: any, changePage: (page: number) => void, }) {
    const { pageNum, pageLimit, pageStart, pageEnd, channelsFilter, changePage } = props;

    const pagesTotal = Math.ceil((channelsFilter.length / pageLimit));
    const channelsPages = [];
    for (let i = Math.max(1, pageNum - 4); i <= Math.min(pageNum + 4, pagesTotal); i++) {
        const currPage = (pageNum === i) ? "numPage currPage" : "numPage";
        channelsPages.push(<button onClick={() => changePage(i)} className={currPage}>{i}</button>);
    }

    const channelsPrev = (pageStart <= 0) ? true : false;
    const channelsNext = (channelsFilter.length > pageStart && channelsFilter.length <= pageEnd) ? true : false;
    channelsPages.unshift(<button className="prevPage" onClick={() => changePage(pageNum - 1)} disabled={channelsPrev}>«</button>);
    channelsPages.push(<button className="nextPage" onClick={() => changePage(pageNum + 1)} disabled={channelsNext}>»</button>);

    return (
        <div className="Pagination">
            <small>Page {pageNum} of {pagesTotal}</small>
            {channelsPages}
        </div>
    );
}

export default Pagination;
