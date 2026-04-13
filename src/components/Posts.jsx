import React, { use } from 'react';

const Posts = ({postPromise}) => {

    const posts = use(postPromise);
    console.log(posts);
    return (
        <div>
            <h2>Total posts: {posts.length} </h2>
            
        </div>
    );
};

export default Posts;