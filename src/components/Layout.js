import React from 'react';
import '../styles/Layout.css'

export default function Layout({children}) {
  return (
    <div className="background">
      {children}
    </div>
  );
}
