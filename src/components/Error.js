export default function Error({ message }) {
  return (
    <div className="error">
      <h1 className="error__title">Error: {message}</h1>
    </div>
  );
}
