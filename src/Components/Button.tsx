import React from 'react';
import './../Components/Button.css';

interface Props {
    text: string;
    className: string;
    onClick: () => void;
  }
  
  const Button: React.FC<Props> = ({ 
      text,
      className,
      onClick
    }) => { 
    return (
      <button 
        className={className}
        onClick={onClick}>
          {text}
      </button>
    );
  }
  
  export default Button;