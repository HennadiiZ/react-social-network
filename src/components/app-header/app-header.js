import React from 'react';


const AppHeader = ({liked, allPosts }) =>{
    return (
        <div className="app-header d-flex">
        <h1>Hennadii Zhukov</h1>
        <h2>{allPosts} notes / {liked} likes </h2>
        </div>
    )
}

export default AppHeader;









