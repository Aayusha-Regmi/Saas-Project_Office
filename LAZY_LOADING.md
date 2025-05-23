# Lazy Loading Implementation Guide

This guide explains how lazy loading has been implemented in the Saas-Project_Office application to improve performance and user experience.

## 1. Route-Level Lazy Loading

All routes are lazy-loaded using React's `lazy()` and `Suspense` APIs in the `Routes.jsx` file. This means route components are only downloaded when they are needed, reducing the initial bundle size.

```jsx
// Example from Routes.jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy loaded components
const HomePage = lazy(() => import('./pages/Home'));
```

## 2. Image Lazy Loading

All images in the application use the `loading="lazy"` attribute, which is supported in modern browsers. This delays loading of off-screen images until the user scrolls near them.

```jsx
<img 
  src="/images/example.png" 
  alt="Example" 
  loading="lazy" 
/>
```

## 3. Custom LazyImage Component

For more advanced control over image loading, we've created a custom `LazyImage` component that includes a loading placeholder and transition effects:

```jsx
import LazyImage from '@/components/ui/LazyImage';

<LazyImage 
  src="/images/example.png" 
  alt="Example" 
  className="w-full h-auto" 
/>
```

## 4. Error Handling

An Error Boundary is implemented in `App.jsx` to catch errors that might occur during lazy loading, providing a better user experience when chunks fail to load.

## Benefits

- Reduced initial page load time
- Decreased bandwidth usage
- Improved user experience for visitors with slow connections
- Better performance on mobile devices

## Implementation Tips

When adding new routes or components:

1. For routes, use the lazy loading pattern in `Routes.jsx`
2. For images, always add the `loading="lazy"` attribute
3. For critical above-the-fold images, don't use lazy loading
4. Consider using the `LazyImage` component for complex image requirements

## Browser Support

The `loading="lazy"` attribute is supported in most modern browsers. For older browsers, images will load normally without lazy loading.
