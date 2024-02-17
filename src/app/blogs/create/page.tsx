import dynamic from 'next/dynamic';
import React from 'react';

const CustomEditor = dynamic(() => {
    return import('../Editor');
}, { ssr: false });

function CreateBlog() {
    return (
        <div className="App">
            <CustomEditor
                data={{title: '', content: '', isNew: true}}
            />
        </div>
    );
}

export default CreateBlog