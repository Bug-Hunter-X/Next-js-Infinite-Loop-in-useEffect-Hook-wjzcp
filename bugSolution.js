```javascript
// components/MyComponent.js
export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // The problem is that the useEffect is triggered on every state update of the count variable.
    // Remove count from the dependency array so the useEffect runs only once when the component mounts.
    // The count variable will only update when the component is first mounted, fixing the bug
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // Update every 1 second

    return () => clearInterval(interval);
  }, []); // Empty dependency array - runs only once on mount

  return <div>Count: {count}</div>;
}
```