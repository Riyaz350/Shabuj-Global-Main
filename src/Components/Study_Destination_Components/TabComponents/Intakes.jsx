
const Intakes = () => {
    const tableData = [
        {
          col1: "Summer Intake",
          col2: "May-June",
          
        },
        {
          col1: "Autumn Intake",
          col2: "September-October",
         
        },
        {
          col1: "Spring Intake",
          col2: "January-February",
          
        },
      ];
    return (
        <div className="flex w-full text-[#181A1B]">
      <div className="w-[65%] mt-20">
        <h1 className="text-5xl font-bold text-center">
        Academic Intake to Study in the UK
        </h1>
        <p className="text-xl font-medium text-center w-[70%] mx-auto mt-5">
        Colleges and universities in the UK offer three intakes. Intakes may also be referred to as terms in some institutions. The three intakes available in the UK are:
        </p>
        <div className=" mx-auto text-xl mt-10">
          <table className=" bg-white border border-gray-300 mx-auto">
            <thead>
              <tr className="bg-[#3B82F6] text-white">
                <th className="py-2 px-4 border-b">QUALIFICATION</th>
                <th className="py-2 px-4 border-b">DURATION</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="bg-[#EFF6FF] font-medium">
                  <td className="px-28 py-3 border-[E1E1E1] border-2">
                    {row.col1}
                  </td>
                  <td className="px-28 border-[E1E1E1] border-2 text-center">
                    {row.col2}
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[35%]">
        <img
          className="w-[80%] mt-28"
          src="https://i.ibb.co/NFfpnWg/Cost-of-Studying.png"
          alt=""
        />
      </div>
    </div>
    );
};

export default Intakes;