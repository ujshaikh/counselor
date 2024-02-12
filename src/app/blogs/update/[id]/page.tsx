import dynamic from 'next/dynamic';
import React from 'react';

const CustomEditor = dynamic(() => {
    return import('../../Editor');
}, { ssr: false });

async function getBlogById (id: string) {
    const res = await fetch('http:localhost:3000/api/blog/'+id)
    return res.json()
}

async function UpdateBlog({params: {id}}: {params: {id: string}}) {
    const blog = await getBlogById(id)
    return (
        <div className="App">
            <CustomEditor
                data={blog.data}
            />
        </div>
    );
}

export default UpdateBlog