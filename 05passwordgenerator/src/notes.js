import { useState, useEffect, useCallback } from "react";

// It can be a bit confusing to determine when to use useState, useEffect, or useCallback because they all help manage different aspects of state and side effects in a React component. Here's a breakdown to help you understand when to use each one:

// 1. useState
// Purpose: Used to declare state variables in a functional component.
// When to use: Whenever you need to hold onto and update a piece of state in your component (e.g., user input, values, counters, etc.).
// Example: If you need to keep track of a password that the user is generating, you would use useState to store that password.

const [password, setPassword] = useState(""); // Store the password


// 2. useEffect
// Purpose: Used to handle side effects (e.g., fetching data, updating the DOM, subscribing to external events).
// When to use: Whenever you need to perform an action after the component renders or when specific state/props change. It's essentially for things like:
// Fetching data when the component mounts.
// Updating something when props or state change.
// Running cleanup functions (like unsubscribing from a service).

useEffect(() => {
  // Some side effect that happens after the component renders
  // E.g., fetch data from an API
}, [dependencies]);  // Runs whenever dependencies change


// 3. useCallback
// Purpose: Memoizes a function so it doesn't get recreated on every render, preventing unnecessary re-renders.
// When to use: Whenever you have a function that is passed as a prop to a child component, or you want to optimize performance by preventing the function from being recreated unnecessarily. If a function is being created within a component and passed to a child component (which might trigger a re-render), useCallback ensures that the function reference stays the same across renders unless its dependencies change.
// Example: When you have a function that is passed to child components and doesn't need to be recreated on every render:
const memoizedFunction = useCallback(() => {
  // Some logic
}, [dependencies]);  // Function is only recreated when dependencies change
// Key Differences Between useEffect and useCallback:
// useEffect is for side effects (things that happen after the component renders), like making API calls, updating the DOM, etc.
// useCallback is for optimizing performance by memoizing functions to avoid unnecessary re-renders, especially when those functions are passed as props to child components.
// When to Use Which?
// useState: Whenever you need to store and update a value in your component (like a password or a counter).
// useEffect: When you need to perform some side effects like fetching data or interacting with external systems (like local storage, DOM manipulations, etc.).
// useCallback: When you want to optimize performance by ensuring that a function doesn't get recreated unnecessarily, particularly when it's passed to child components as props.
// Example Scenario:
// Let’s say you have a parent component that passes a handlePasswordChange function to a child component. You might use useCallback to make sure the function reference doesn't change on every render.

const ParentComponent = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = useCallback((newPassword) => {
    setPassword(newPassword);
  }, []);  // This function will not be recreated unless dependencies change

  return <ChildComponent onPasswordChange={handlePasswordChange} />;
};

const ChildComponent = ({ onPasswordChange }) => {
  // Use the function passed down from the parent
  return <input onChange={(e) => onPasswordChange(e.target.value)} />;
};
// In Summary:
// Use useState to store and update values (state).
// Use useEffect for side effects that need to happen after a render (e.g., data fetching, event subscriptions).
// Use useCallback to memoize functions, especially if they are passed down as props and you want to optimize re-renders.
// Let me know if you want more examples or clarification on any of these concepts!