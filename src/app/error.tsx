'use client';

const Error = ({ error }: { error: Error }) => {
  return (
    <div className="p-8 text-red-500">
      <h2>Something went wrong!</h2>
      <pre>{error.message}</pre>
    </div>
  );
};

export default Error;
