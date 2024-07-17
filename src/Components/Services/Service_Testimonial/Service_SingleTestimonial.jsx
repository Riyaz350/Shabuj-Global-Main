

const Service_SingleTestimonial = ({item}) => {
    const { image } = item
    return (
        <div>
            <img src={image} className="rounded-2xl lg:w-[951px]" alt="" />        
        </div>
    );
};

export default Service_SingleTestimonial;