const DataTableBody = ({ filteredProduct }) => {
  return (
    <>
      {filteredProduct.length > 0 ? (
        filteredProduct.map((data) => (
          <tr key={data.id} className={data.bgColor}>
            <td className=" pl-3 w-[25%] py-3 text-lg">{data.name}</td>
            <td className=" text-ellipsis py-3 pl-3 w-[25%] text-lg">
              {data.description}
            </td>
            <td className=" pl-3 w-[25%] py-3 text-lg">{data.status}</td>
            <td className=" pl-3 w-[25%] py-3 text-lg">{data.price}</td>
            <td className=" pl-3 w-[25%] py-3 text-lg">{data.category}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="pl-3">No Search Data Found</td>
        </tr>
      )}
    </>
  );
};

export default DataTableBody;
