import React, { useEffect, useState } from 'react';

export const Detail = () => {
    const data = JSON.parse((localStorage.getItem('detail')));
    console.log(data);
    return (
        <>
            <div className="container">
                {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${data.links.youtube_id}?autoplay=1`}
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
                <code className="prettyprint lang-js">{JSON.stringify(data)}</code>
            </div>
        </>
    );
}