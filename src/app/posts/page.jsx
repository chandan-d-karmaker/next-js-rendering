import Posts from '@/components/Posts';
import React, { Suspense } from 'react';

const PostPage = async () => {

    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

    return (
        <div>
            <Suspense fallback={<h2>Loadingggggg.........</h2>}>
                <Posts postPromise={postPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostPage;