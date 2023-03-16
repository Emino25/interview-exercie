import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

const Button = ({
  link,
  text,
  textColor,
  icon,
  backgroundColor,
  borderColor,
  fontSize,
}) => {
  return (
    <Link
      to={link}
      style={{
        color: textColor || 'black',
        backgroundColor: backgroundColor || 'transparent',
        border: '1px solid',
        borderColor: borderColor || backgroundColor || textColor,
        padding: '4px 14px',
        borderRadius: '4px',
        fontWeight: '600',
        display: 'inline-block',
        fontSize: fontSize || '16px',
      }}
    >
      {text || icon}
    </Link>
  );
};

export default Button;
