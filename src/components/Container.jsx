const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`xl:max-w-300 px-3 sm:px-2 xl:px-0 mx-auto container ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
