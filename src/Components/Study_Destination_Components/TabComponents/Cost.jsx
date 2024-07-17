

const Cost = () => {
    const tableData = [
        {
          col1: "Undergraduare Degree",
          col2: "$10,000 - $30,000",
          
        },
        {
          col1: "Postgraduate Degree",
          col2: "$12,000 - $35,000",
         
        },
        {
          col1: "MBA/Masters in Business",
          col2: "$15,000 - $40,000",
          
        },
        {
          col1: "PHD",
          col2: "$12,000 - $25,000",
         
        },
      ];
    return (
        <div className="flex w-full text-[#181A1B]">
      <div className="w-[65%] mt-20">
        <h1 className="text-5xl font-bold text-center">
          Cost of Studying
        </h1>
        
        <div className=" ml-auto text-xl mt-10">
          <table className=" bg-white border border-gray-300 mx-auto">
            <thead>
              <tr className="bg-[#3B82F6] text-white">
                <th className="py-2 px-4 border-b">DEGREE</th>
                <th className="py-2 px-4 border-b">COST IN GBP/YEAR</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="bg-[#EFF6FF] font-medium">
                  <td className="px-4 py-3 border-[E1E1E1] border-2">
                    {row.col1}
                  </td>
                  <td className="p-4 border-[E1E1E1] border-2 text-center">
                    {row.col2}
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[35%] mx-auto">
        <img
          className=""
          src="https://i.ibb.co/XVWyW89/Coins-rafiki-1.png"
          alt=""
        />
      </div>
    </div>
    );
};

export default Cost;