const BeautyService = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <div className="flex justify-center items-center mb-5">
                <div className='w-16 h-16 text-2xl text-white rounded-full p-4 bg-[#9C0B35] flex justify-center items-center'>
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold text-white opacity-80 mb-3 text-center">{title}</h3>
            <p className="text-base text-gray-400 text-center">{description}</p>
        </div>
    );
};

export default BeautyService;
