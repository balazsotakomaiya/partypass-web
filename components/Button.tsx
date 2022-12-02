import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
  const { children, className, ...rest } = props;
  const mergedClasses = `inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`;

  return (
    <button type="button" className={mergedClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
