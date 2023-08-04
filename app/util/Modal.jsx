'use client'
import React from 'react'

import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ text, isOpen, onClose }) => {
  console.log('text-',text,'isOpen-',isOpen, 'onClose-',onClose)
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // 서버와 클라이언트를 동시지원하는 next.js에서 
    // 클라이언트에서만 렌더링 될 수 있도록 useEffect와 useState를 통해 조건을 걸어놓고 modal을 구현 
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return ReactDOM.createPortal(
    isOpen ? (
      <div className="modal-overlay">
        <div className="modal">
          {text}
          <button onClick={onClose}>Close Modal</button>
        </div>
      </div>
    ) : null,
    document.getElementById('modal-root')
  );
};
