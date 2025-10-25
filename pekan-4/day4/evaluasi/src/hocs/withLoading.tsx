// src/hocs/withLoading.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Komponen Loading Spinner yang lebih menarik
const LoadingSpinner = () => (
  <div className="flex justify-center items-center p-8">
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-sky-400 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  </div>
);

interface WithLoadingProps {
  isLoading: boolean;
}

function withLoading<P extends object>(Component: React.ComponentType<P>) {
  const WithLoadingComponent = (props: P & WithLoadingProps) => {
    const { isLoading, ...originalProps } = props;

    if (isLoading) {
      return <LoadingSpinner />;
    }

    return <Component {...(originalProps as P)} />;
  };

  return WithLoadingComponent;
}

export default withLoading;