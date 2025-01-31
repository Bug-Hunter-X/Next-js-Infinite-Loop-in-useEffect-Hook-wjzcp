# Next.js Infinite Loop Bug

This repository demonstrates a common but subtle bug in Next.js applications involving the `useEffect` hook.  The bug is caused by incorrectly updating state within the `useEffect` dependency array, leading to an infinite loop.

## Bug Description

A component uses the `useEffect` hook to increment a state variable. However, the dependency array includes the state variable itself. This creates a cycle where the state change triggers a re-render, which in turn triggers the `useEffect` again, leading to an infinite loop of state updates and re-renders.  This will often crash the browser tab or freeze the application.

## Solution

The solution is to adjust the dependencies of the useEffect hook.  The code should only trigger when the value of the dependency changes, and not on every state update of the component.  The problem is that the hook reacts to every state change, causing the infinite loop.  By removing or changing the dependency, the loop is stopped.