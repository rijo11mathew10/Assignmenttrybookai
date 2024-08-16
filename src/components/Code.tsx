type Props = {
  heading?: string;
  code: string | object;
};

function Code({ heading, code }: Props) {
  return (
    <>
      {heading ? (
        <h4 className="text-lg font-semibold text-secondary mb-3">{heading}</h4>
      ) : null}

      <div className="mb-6">
        <pre className="border-2 border-border p-4 rounded-md md:overflow-x-hidden overflow-x-scroll">
          <code className="text-text">
            {typeof code === "object" ? JSON.stringify(code, null, 2) : code}
          </code>
        </pre>
      </div>
    </>
  );
}

export default Code;
