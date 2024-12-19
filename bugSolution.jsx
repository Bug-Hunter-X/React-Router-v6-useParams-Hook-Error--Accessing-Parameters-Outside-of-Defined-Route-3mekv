To fix this, ensure `MyComponent` is nested within a route that uses the `:id` parameter:

```jsx
// Correct usage
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>User ID: {id}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<MyComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

```

Now, `useParams` will correctly extract the `id` parameter from the URL when accessing `/users/{someId}`.  If `MyComponent` is rendered at another path without the parameter, `useParams` will gracefully return an empty object with undefined parameter values.

Remember to always verify your route structure in relation to where you're using `useParams` to avoid this error.