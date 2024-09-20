const Latest_Blogs = () => {
  const data = [
    {
      id: 1,
      image: "https://i.ibb.co/sqZW4W2/Blog-Image-three.png",
      category: "Networking",
      title: "Networking in University: A Shabuj Global Student's Guide",
      description:
        "Embarking on your university journey in the UK is an exciting chapter in your life, not just academically but also for personal and professional growth...",
    },
    {
      id: 2,
      image: "https://i.ibb.co/8KLDMFT/Blog-Image-two.png",
      category: "Socializing",
      title: "Connecting at University: Shabuj Global Student Pathway",
      description:
        "Starting your university journey in the UK is an exciting chapter in life, not only academically but also for personal and professional development",
    },
    {
      id: 3,
      image: "https://i.ibb.co/Cbt0NYW/Blog-image-one.png",
      category: "Networking",
      title: "University Networking: Guide for Global Students by Shabuj",
      description:
        "Beginning your university journey in the UK is an exciting chapter in your life, not only academically but also for personal and professional growth",
    },
    {
      id: 4,
      image: "/src/assets/Blog_image_four.png",
      category: "Building",
      title: "Guide to University Networking: For Shabuj Global Students",
      description:
        "Entering your university journey in the UK is an exhilarating chapter in your life, not merely academically but also for personal and professional progress.",
    },
    {
      id: 5,
      image: "/src/assets/Blog_image_five.png",
      category: "Relationships",
      title: "Shabuj Global Student's Guide to University Networking",
      description:
        "Embarking on your university journey in the UK is an exhilarating phase in your life, not only academically but also for personal and skill develop",
    },
    {
      id: 6,
      image: "/src/assets/Blog_image_six.png",
      category: "Connections",
      title:
        "Navigating University Networking: A Shabuj Global Student's Guide",
      description:
        "Starting your university adventure in the UK is a thrilling phase of your life, not just in academics but also for personal and career growth",
    },
    {
      id: 7,
      image: "/src/assets/Blog_image_seven.png",
      category: "Interacting",
      title: "University Networking: A Guide for Shabuj Global Students",
      description:
        "Beginning your university journey in the UK is an exciting chapter in your life, not just academically but also for personal and professional growth...",
    },
    {
      id: 8,
      image: "/src/assets/Blog_image_eight.png",
      category: "Making",
      title: "Building Connections at University: Shabuj Global Student Guide",
      description:
        "Starting your university chapter in the UK is an exciting phase in your life, not just academically but also for personal and professional develop.",
    },
    {
      id: 9,
      image: "/src/assets/Blog_image_nine.png",
      category: "Expanding",
      title: "College Networking: A Global Guide for Students at Shabuj",
      description:
        "Starting your university journey in the UK is an exhilarating chapter in your life, not only academically but also for personal and professional growth...",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto mb-28 px-10 pb-24">
      <h4 className="text-[28px] font-semibold text-center lg:text-left lg:pl-2">
        Latest Blogs
      </h4>
      <div className=" w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-12 my-5 md:my-7 lg:my-10">
        {data.slice(0, 3).map((item) => (
          <div key={item.id} className="group">
            <div className="shadow-xl rounded-[16px] flex flex-col h-full group-hover:bg-[#081831] duration-300">
              <img src={item.image} alt="" className="h-[220px] w-full" />
              <div className="p-4 pb-4 flex flex-col justify-between flex-grow">
                <div>
                  <p className="inline-block w-fit px-2 py-[2px] text-[#FF8156] text-xs bg-[#FFF2EE] rounded mb-2">
                    {item.category}
                  </p>
                  <p className="text-black font-bold group-hover:text-white !mt-0 flex-grow">
                    {item.title}
                  </p>
                  <p className="group-hover:text-white mt-2 ">
                    {item.description.slice(0, 150)}...
                  </p>
                </div>
                <button className="px-4 py-2 text-white rounded-full bg-[#FE632F] hover:bg-blue-500 mt-4">
                  Continue Reading
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest_Blogs;
