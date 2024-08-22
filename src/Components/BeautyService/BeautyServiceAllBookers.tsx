import { GiComb } from "react-icons/gi";
import BeautyService from "./BeautyServiciesBookers";
import HeaderTitles from "../text/HeaderBookers";

export default function BeautyServiceAll() {
    return (
        <div className=" flex flex-col gap-5 pt-5">
            <HeaderTitles text={"Выберите категорию услуг красоты в bookers"} />
            <div className='flex flex-wrap justify-between gap-4 p-4'>
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
            <BeautyService icon={<GiComb />} title='Барбершоп' description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.' />
        </div>
        </div>
    );
}
