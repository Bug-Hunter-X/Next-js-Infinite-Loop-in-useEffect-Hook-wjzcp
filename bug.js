```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent />
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // This will cause an infinite loop because the component re-renders on every state change.
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```