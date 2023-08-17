const LayoutHelper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sm:px-8 mt-16 sm:mt-32 flex-auto">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutHelper;
