import React from "react";

import { Pagination } from "react-bootstrap";

export function CPagination({
    paginationData,
    setSearchParams,
    goToSearch,
    page
}) {


    return (
        <Pagination size="sm" style={{float:"right"}} >
            <Pagination.Prev 
            disabled={!paginationData.HasPrev}
            onClick={()=> {
                const newP = parseInt(page) - 1;
                setSearchParams((params) => {
                    params.set('page', newP);
                    return params;
                });
                goToSearch(newP);
            }}
            />

            {
                <PItems
                n={paginationData.PagesCount}
                current={page}
                setPage={setSearchParams}
                goToSearch={goToSearch}
                />
            }
            <Pagination.Next
            disabled={!paginationData.HasNext}
            onClick={()=> {
                const newP = parseInt(page) - 1;
                setSearchParams((params) => {
                    params.set('page', newP);
                    return params;
                });
                goToSearch(newP);
            }}
            />

        </Pagination>
    )
}


function PItems({n, current, setPage, goToSearch}){
    const items =[];

    let c = getPageButtons2(n, current);

    c.forEach((i) => {
        let a = i == current;
        items.push(
            <Pagination.Item
            onClick={() => {
                setPage((params) => {params.set('page', i); return params;});
                goToSearch(i);
            }}
            key={i}
            active={a}
            >
            {i}
            </Pagination.Item>
        )
    });
    return items;
}

//формат отображения
//1..с-2 с-1 С с+1 с+2 юю N
function getPageButtons2(n, current) {

    console.log('всего страниц:' + n + ' текущая:' + current);

    current = parseInt(current);
    n = parseInt(n);

    let c = [];

    if(n <= 7) {
        for(let i=1; i<=n;i++) {
            c.push(i);
        }

    }else {
        c.push(1);
        c.push(n);
        
        if(current > 3) c.push(current - 2);
        if(current > 2) c.push(current - 1);
        c.push(current);
        if(n>current+1) c.push(current + 1);
        if(n>current+2) c.push(current + 2);
    }

    return c;
}