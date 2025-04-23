import React from 'react';

const Blogs = () => {
    return (
        <div>
           
                <div className="w-11/12 mx-auto mt-10">
                <h1 className="text-3xl font-bold text-center mb-8">React Hooks FAQ</h1>

                <div className="mb-6 p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">1. What is useState and how does it work in React?</h2>
                    <p><strong>useState</strong> is a Hook that is add state to functional components. It returns a state variable and a function to update it.</p>
                </div>

                <div className="mb-6 p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">2. What is the purpose of useEffect in React?</h2>
                    <p><strong>useEffect</strong> is used for side effects like data fetching, DOM updates, or timers. It runs after the component renders.</p>
                </div>

                <div className="mb-6 p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">3. What is a custom hook in React and when should you use one?</h2>
                    <p><strong>Custom Hooks</strong> are functions that reuse logic using other hooks. Use them to share code between components cleanly.</p>
                </div>

                <div className="mb-6 p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">4. Difference between controlled and uncontrolled components. Which one is better?</h2>
                    <p><strong>Controlled</strong> components rely on React state, <strong>Uncontrolled</strong> components use DOM refs. Controlled is better for consistency and control.</p>
                </div>

                <div className="mb-6 p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">5. Tell us something about useFormStatus() in React?</h2>
                    <p><strong>useFormStatus()</strong> is used with React Server Components to track the status of a form submission (pending, error, success).</p>
                </div>
                </div>
            

        </div>
    );
};

export default Blogs;