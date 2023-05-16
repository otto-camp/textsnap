function Error({ error }: { error: string }) {
  return (
    <div className="bg-red-700 w-full p-6 text-center font-medium rounded-md">
      {error.toString()}
    </div>
  );
}

export default Error;
