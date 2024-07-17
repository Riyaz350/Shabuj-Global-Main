const SingleTestimonial = ({item}) => {
    const {image, name, comment} = item
    return (
        <div className="bg-[#D9D9D9] bg-rounded bg-gradient relative text-center w-[371px] h-[530px]">
            <img className="mx-auto max-w-[80%] pt-[78px] mb-[27px]" src={image} alt=""/>
            <p className="poppins-semibold lg:text-[28px] text-[11px] text-center mb-[19px]">{name}</p>
            <p className="mulish-regular lg:text-base text-[6px] lg:text-left text-center pb-[36px]">{comment}</p>
            <div className="absolute top-[31px] left-[19px]">
                <img src="./assets/quote.png" alt="" />
            </div>
        </div>
    );
};

export default SingleTestimonial;