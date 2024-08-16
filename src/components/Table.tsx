type Props = {
  values: any[];
  headers: any[];
};

function Table({ values, headers }: Props) {
  return (
    <div className="md:overflow-x-hidden overflow-x-scroll">
      <table className="w-full gap-8 text-text border-2 border-border rounded-sm mb-4">
        <thead className="bg-primary text-text">
          <tr className="text-left">
            {headers.map((heading) => (
              <th key={heading.title} className="p-4 font-medium text-sm">
                {heading.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {values.map((value) => (
            <tr key={value.description}>
              <td className="text-accent p-4">{value.title}</td>
              <td className="p-4">{value.subtitle}</td>
              <td className="p-4">{value.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
