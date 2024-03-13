const Loader = () => {
  return (
    <div>
      <section className="loader">
        <div></div>
      </section>
    </div>
  );
};
export default Loader;

export const Skeleton = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-shape"></div>
      <div className="skeleton-shape"></div>
      <div className="skeleton-shape"></div>
    </div>
  );
};
