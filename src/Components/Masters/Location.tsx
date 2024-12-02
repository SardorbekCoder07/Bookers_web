import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { leave } from "@/services/Urls";

interface Types {
  setDistrictId: (val: string) => void;
  city: string;
  setCity: (val: string) => void;
}

interface MasterOrSalon {
  masterOrSalonId: string;
  masterOrSalonName: string;
  roleName: string;
}

const LocationSelect: React.FC<Types> = ({ setDistrictId, city, setCity }) => {
  const [data, setData] = useState<MasterOrSalon[]>([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useCallback bilan getCity funksiyasini o'rab qo'ydik
  const getCity = useCallback(async () => {
    if (!city.trim()) return;

    try {
      setIsLoading(true);
      const response = await axios.get(`${leave}name=${city}`);

      if (response.data.success) {
        setData(response.data.body);
      } else {
        console.error("Error fetching data:", response.data.message);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
      setData([]);
    } finally {
      setIsLoading(false);
    }
  }, [city]);

  const handleClick = (id: string, name: string) => {
    setCity(name);
    setDistrictId(id);
    setToggle(false); // Tanlovdan so'ng dropdownni yopish
  };

  // useEffect bog'liqliklar massiviga getCity ni qo'shdik
  useEffect(() => {
    getCity();
    setToggle(city.trim().length > 0);
  }, [city, getCity]);

  return (
    <div className="relative w-full">
      <div className="w-full z-30 bg-transparent mt-1">
        <label htmlFor="city" className="block text-gray-700">
          Название мастера или салона красоты
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-[#B9B9C9] border text-gray-900 text-sm rounded-lg focus:ring-[#9C0B35] focus:border-[#9C0B35] block w-full p-2.5"
          placeholder="Название мастера или салона красоты"
        />
      </div>
      {toggle && (
        <div className="absolute mb-4 w-full bg-gray-800 text-white rounded-lg border border-white overflow-auto max-h-96">
          {isLoading && <div className="p-4 text-center">Loading...</div>}
          {data.length > 0 ? (
            data.map((item) => (
              <button
                key={item.masterOrSalonId}
                onClick={() => handleClick(item.masterOrSalonId, item.masterOrSalonName)}
                className="w-full text-left p-2 hover:bg-gray-600"
                aria-label={`Select ${item.masterOrSalonName}`}
              >
                {item.masterOrSalonName}
              </button>
            ))
          ) : (
            !isLoading && (
              <div className="p-4 text-center">
                No results found for &quot;{city}&quot;
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSelect;
