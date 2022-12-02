import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

const Panel: React.FC<Props> = ({ children, ...props }) => {
  const { className, ...rest } = props;
  const mergedClasses = `border bg-white shadow overflow-hidden sm:rounded-lg ${className}`;

  return (
    <div className={mergedClasses} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
