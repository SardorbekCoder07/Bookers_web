const BeautyService = ({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) => {
    return (
        <div className="w-[30%]">
            <div className="flex justify-center items-center mb-5 px-6">
                <div className='w-16 h-16 text-2xl text-white rounded-full p-5 bg-[#9C0B35] flex justify-center items-center'>
                    {icon}
                </div>
            </div>
            <h3 className="text-xl font-bold text-white opacity-80 mb-3 text-center">{title}</h3>
            <p className="text-base text-gray-400 text-center">{description}</p>
        </div>
    );
};

export default BeautyService;