const Heading = ({ title, color = "" }) => {
  return (
    <div>
      <h1
        className={`${color} font-bold md:text-3xl text-2xl lg:text-5xl leading-full text-center tracking-sm`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Heading;
