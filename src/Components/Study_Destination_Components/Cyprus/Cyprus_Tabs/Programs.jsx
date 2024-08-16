const Programs = () => {
    const tableData = [
      {
        col1: "Degrees (Such as BA, B.Sc., BEng)",
        col2: "3 years",
        col3: "2 years",
      },
      {
        col1: "Sandwich degrees",
        col2: "4 years including one year in the industry",
        col3: "2 years",
      },
      {
        col1: "Tauch masters (such as MA, M.Sc, LLM, MBA, MREs)",
        col2: "1 year",
        col3: "2 years",
      },
      {
        col1: "Research masters (such as MPhil, PhD, Dphil)",
        col2: "1-2 years",
        col3: "3 years",
      },
    ];
  
    return (
      <div className="max-w-[1350px] mx-auto px-4">
        <div className="flex w-full text-[#181A1B] items-center lg:flex-row flex-col">
          <div className="lg:w-[65%] w-full mt-20">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold text-center">
              Programs and their duration in The Cyprus
            </h1>
            <p className="text-xl font-medium text-center">
              Here are the programs that the Cyprus universities offer:
            </p>
            <div className="w-full lg:w-[80%] mx-auto lg:text-xl md:text-xl text-xs mt-10">
              <table className="bg-white border border-gray-300 w-full">
                <thead>
                  <tr className="bg-[#3B82F6] text-white">
                    <th className="py-2 px-4 border-b">QUALIFICATION</th>
                    <th className="py-2 px-4 border-b">DURATION</th>
                    <th className="py-2 px-4 border-b">
                      GRADUATE IMMIGRATION ROUTE (GIR)
                    </th>
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
                      <td className="p-4 border-[E1E1E1] border-2 text-center">
                        {row.col3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-[35%] w-full lg:block hidden">
            <img
              className="w-[80%] mt-28 mx-auto"
              src="https://i.ibb.co/k6yJDnY/time-flies-rafiki-1.png"
              alt="Time flies illustration"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Programs;
  