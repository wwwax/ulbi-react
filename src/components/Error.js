export default function Error({ message }) {
  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="uppercase font-fira_bold text-secondary text-4xl">Error: {message}</h1>
    </div>
  );
}
