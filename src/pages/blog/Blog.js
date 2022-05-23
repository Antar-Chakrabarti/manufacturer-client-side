import React from 'react';

const Blog = () => {
    return (
        <div className='p-10'>
            <div className=''>
                <h2 className="text-2xl my-5">1. How will you improve the performance of a React application?</h2>
                <div>
                    <p className='text-2xl font-bold'>Ans:</p>
                    <li>a. Using Immutable Data Structures</li>
                    <li>b. Function/Stateless Components and React.PureComponent</li>
                    <li>c. Multiple Chunk Files</li>
                    <li>d. Using Production Mode Flag in Webpack</li>
                    <li>e. Dependency optimization</li>
                    <li>f. Avoid Inline Function Definition in the Render Function.</li>
                    <li>g. Throttling and Debouncing Event Action in JavaScript
                        Event trigger rate is the</li>
                    <li>h. Avoiding Props in Initial States</li>
                    <li>i. Spreading props on DOM elements</li>
                    <li>j. Use Reselect in Redux to Avoid Frequent Re-render</li>
                    <li>k.  Avoid Async Initialization in. etc</li>
                </div>
            </div>
        </div>
    );
};

export default Blog;