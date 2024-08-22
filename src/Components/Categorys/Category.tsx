"use client";
import { GiComb } from "react-icons/gi";
import BeautyService from "./BeautyServiciesBookers";
import HeaderTitles from "../text/HeaderBookers";
import axios from "../../services/api";
import { useEffect, useState } from "react";
import { attechment } from "@/services/Urls";

interface Category {
    id: number;
    name: string;
    message: string;
    attachmentId: string | null; // Allow for the possibility that attachmentId might be null
}

export default function Category() {
    const [data, setData] = useState<Category[]>([]);

    const getCategory = async () => {
        try {
            const res = await axios.get("/category");
            setData(res.data.body);
            console.log(res.data.body);
        } catch (error) {
            console.error("Error fetching category data:", error);
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <div className="flex flex-col max-w-full gap-5 pt-5">
            <HeaderTitles text="Выберите категорию услуг красоты в bookers" />
            <div className="flex flex-wrap justify-start gap-20 p-4">
                {data && data.length > 0 ? (
                    data.map((category: Category) => (
                        <BeautyService
                            key={category.id}
                            img={
                                category.attachmentId
                                    ? attechment + category.attachmentId
                                    : <GiComb />
                            }
                            title={category.name}
                            description={category.message || "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."}
                        />
                    ))
                ) : (
                    <p>Категории не найдены</p> 
                )}
            </div>
        </div>
    );
}
