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
            <div className=''>
                <h2 className="text-2xl my-5">2. What are the different ways to manage a state in a React application?</h2>
                <div>
                    <p className='text-2xl font-bold'>*The four kinds of react state to manage</p>
                    <ol type='a'>
                        <li>1.Local state</li>
                        <li>2.Global state</li>
                        <li>3.Server state</li>
                        <li>4.URL state</li>
                    </ol>
                    <p className='text-2xl font-bold'>Local state</p>
                    <p>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.</p>
                    <p>useState is the first tool you should reach for to manage state in your components.</p>
                    <p>It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
                    <p className='text-2xl font-bold mt-10'>Global state</p>
                    <p>You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.</p>
                    <p>What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.</p>
                    <p>To manage it, however, you should opt for a third-party solution. Many developers are inclined to use built-in React features like the Context API to manage their state.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;