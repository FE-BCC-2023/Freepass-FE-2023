const SubmitButton = (props: any) => {
  return (
    <button
      type="submit"
      className="bg-secondary text-center text-white rounded-xl text-lg px-12 py-3 2xl:px-16 2xl:py-4 2xl:text-xl font-bold"
    >
      {props.children}
    </button>
  );
};

export default SubmitButton;
