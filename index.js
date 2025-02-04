```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    // Corrected navigation using router.replace
    router.replace('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go Back Home</button>
    </div>
  );
}
```