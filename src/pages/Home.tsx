import "tailwindcss/tailwind.css";
import "../App.css";
import Charity from "../assets/images/hero_bg_bw_1.jpg";
import Card from "../components/Card";
import causes from "../../CausesList.json";
import { useState, useEffect } from "react";
import { ListState } from "../types/charity.types";
import axios from "axios";
import { API_ROUTES } from "../api/api";
import ProductList from "../components/Search";

const Home: React.FC = () => {
  const [lists, setLists] = useState<ListState[]>([]);
  const causesList = causes.causes;

  useEffect(() => {
    const randCauses =
      causesList[Math.floor(Math.random() * causesList.length)];

    axios
      .get(`${API_ROUTES.BASE_URL}${API_ROUTES.SEARCH(randCauses)}`)
      .then((res) => {
        console.log(res.data.nonprofits);
        setLists(res.data.nonprofits);
      })
      .catch((err) => {
        console.error("Axios request error:", err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="w-full relative h-[720px] md:h-[500px] lg:h-[600px] xl:h-[720px] bg-no-repeat bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${Charity})` }}
      ></div>
      <ProductList />
      <div className="font-sans bg-slate-100 h-auto">
        <div className="animate-bounce pt-8">
          <h3 className="text-center text-gray-600 text-[20px] md:text-[30px] lg:text-[40px] pt-6">
            You May Interest
          </h3>
        </div>

        <div className="mx-[5%] md:mx-[8%] lg:mx-[10%] pb-[100px]">
          <div className="mt-[40px] md:mt-[60px] mb-[40px] md:mb-[60px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {lists ? (
              lists.map((item) => (
                <Card
                  key={item.slug}
                  cover={item.coverImageUrl}
                  logo={item.logoUrl}
                  name={item.name}
                  slug={item.slug}
                  location={item.location}
                />
              ))
            ) : (
              <div className="mt-[40px]">
                <p className="text-base md:text-lg lg:text-xl font-serif text-red-500">
                  Sorry. Something went wrong
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
