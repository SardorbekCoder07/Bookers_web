import Link from "next/link";
import { FaPhone, FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
    return (
        <div className='flex mt-10 gap-5 justify-end'>
            <form className="flex items-center bg-gray-900 text-white rounded-full px-4 py-2">
                <input
                    type="text"
                    placeholder="Поиск мастеров/салонов/услуг"
                    className="bg-transparent outline-none w-[300px]"
                />
                <button type="submit" className="bg-[#9c0b35] rounded-full p-2 ml-2">
                    <FaSearch />
                </button>
            </form>
            <div>
                <Link href={'tel:+998 77 308-88-88'}>
                    <div className="flex items-center bg-gray-900 text-white w-[215px] cursor-pointer rounded-full px-4 py-2">
                        <div className="bg-[#9c0b35] rounded-full p-2">
                            <FaPhone />
                        </div>
                        <span className="ml-2">+998 77 308-88-88</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SearchBar