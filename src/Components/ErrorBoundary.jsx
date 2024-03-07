import React, {useState, useEffect} from 'react'
import ErrorPage from './ErrorPage';

const ErrorBoundary = ({children}) => {
    const [hasError, sethasError] = useState(false);

    useEffect(() => {
        const Error = (error, errorinfo) => {
            console.error(`У вас проблема ${error, errorinfo}`);
            sethasError(true);
        };
        window.addEventListener('error', Error);
        return () => {
            window.removeEventListener('error', Error);
        }
    }, []);

    if (hasError) {
        return <ErrorPage />;
    }
    return children;
}

export default ErrorBoundary;

// ErrorBoundary.jsx
// import React, { useState, useEffect } from 'react';
// import ErrorPage from './ErrorPage';

// const ErrorBoundary = ({ children }) => {
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     const handleError = (error, errorInfo) => {
//       console.error('Помилку перехоплено ErrorBoundary:', error, errorInfo);

//       // Перевірка чи дані вже збережено у localStorage
//       const storedError = localStorage.getItem('errorOccurred');
//       if (!storedError) {
//         setHasError(true);
//         localStorage.setItem('errorOccurred', 'true');
//       }
//     };

//     window.addEventListener('error', handleError);
//     window.addEventListener('unhandledrejection', handleError);

//     return () => {
//       window.removeEventListener('error', handleError);
//       window.removeEventListener('unhandledrejection', handleError);
//     };
//   }, []);

//   if (hasError) {
//     return <ErrorPage />;
//   }

//   return children;
// };

// export default ErrorBoundary;






