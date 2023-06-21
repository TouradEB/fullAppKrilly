// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function IndexPage() {
//   const [places, setPlaces] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [filteredPlaces, setFilteredPlaces] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     axios.get("/places").then((response) => {
//       setPlaces(response.data);
//       setFilteredPlaces(response.data);
//     });
//   }, []);

//   useEffect(() => {
//     axios
//       .get("/categories")
//       .then((response) => {
//         setCategories(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedCategory === "") {
//       setFilteredPlaces(places);
//     } else {
//       const filtered = places.filter((place) => {
//         const categoryId = place.categorie?._id;
//         const selectedCategoryId = selectedCategory?.trim();
//         return (
//           categoryId &&
//           selectedCategoryId &&
//           categoryId.toLowerCase() === selectedCategoryId.toLowerCase()
//         );
//       });
//       setFilteredPlaces(filtered);
//       console.log({ selectedCategory });
//       console.log({ filtered });
//     }
//   }, [selectedCategory, places]);

//   useEffect(() => {
//     const filtered = places.filter((place) => {
//       const title = place.titre?.toLowerCase();
//       const address = place.adress?.toLowerCase();
//       const price = place.price?.toString();
//       const search = searchTerm.toLowerCase();

//       return (
//         title.includes(search) ||
//         address.includes(search) ||
//         price.includes(search)
//       );
//     });

//     setFilteredPlaces(filtered);
//   }, [searchTerm, places]);
//   const { t } = useTranslation();

//   return (
//     <>
//       <div className=" flex">
//         <div className="mt-4  border border-black py-2 px-2 items-center rounded-2xl gap-2 w-fit mr-4">
//           <select
//             className=""
//             value={selectedCategory}
//             onChange={(ev) => setSelectedCategory(ev.target.value)}
//           >
//             <option value="">{t("IndexPage.tous")}</option>
//             {categories.map((category) => (
//               <option key={category._id} value={category._id}>
//                 {t(category.name)}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <input
//             className=" mt-4 right-0  p-2 bg-white border border-black text-black rounded-md shadow-md"
//             placeholder={t("rechercher")}
//             value={searchTerm}
//             onChange={(ev) => setSearchTerm(ev.target.value)}
//           />
//         </div>
//       </div>
//       <div className="mt-8   grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
//         {filteredPlaces.length > 0 &&
//           filteredPlaces.map((place) => (
//             <div key={place._id}>
//               <Link to={"/place/" + place._id}>
//                 <div className="bg-gray-500 mb-2 rounded-2xl flex">
//                   {place.photos?.[0] && (
//                     <img
//                       className="rounded-2xl object-cover aspect-square"
//                       src={"http://localhost:4000/" + place.photos?.[0]}
//                       alt=""
//                     />
//                   )}
//                 </div>
//                 <h2 className="font-bold">{place.adress}</h2>
//                 <h3 className="text-sm text-gray-500">{place.titre}</h3>
//                 <div className="mt-1">
//                   <span className="font-bold">${place.price}</span> {t('per night')}
//                 </div>
//                 <div></div>
//               </Link>
//               <span
//                 className={`cursor-pointer absolute text-white py-1 px-2 mt-0 rounded-2xl ${
//                   place.rented ? "bg-primary opacity-50" : "bg-white"
//                 }`}
//                 disabled={place.rented}
//               >
//                 {t(place.rented ? "Loué" : "")}
//               </span>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// }


// ============15/6

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
      setFilteredPlaces(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredPlaces(places);
    } else {
      const filtered = places.filter((place) => {
        const categoryId = place.categorie?._id;
        const selectedCategoryId = selectedCategory?.trim();
        return (
          categoryId &&
          selectedCategoryId &&
          categoryId.toLowerCase() === selectedCategoryId.toLowerCase()
        );
      });
      setFilteredPlaces(filtered);
      console.log({ selectedCategory });
      console.log({ filtered });
    }
  }, [selectedCategory, places]);

  useEffect(() => {
    const filtered = places.filter((place) => {
      const title = place.titre?.toLowerCase();
      const address = place.adress?.toLowerCase();
      const price = place.price?.toString();
      const search = searchTerm.toLowerCase();

      return (
        title.includes(search) ||
        address.includes(search) ||
        price.includes(search)
      );
    });

    setFilteredPlaces(filtered);
  }, [searchTerm, places]);

  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="mt-4 border border-black py-2 px-2 items-center rounded-2xl gap-2 w-fit mr-4">
          <select
            className=""
            value={selectedCategory}
            onChange={(ev) => setSelectedCategory(ev.target.value)}
          >
            <option value="">{t("IndexPage.tous")}</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {t(category.name)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            className="mt-4 right-0 p-2 bg-white border border-black text-black rounded-md shadow-md"
            placeholder={t("rechercher")}
            value={searchTerm}
            onChange={(ev) => setSearchTerm(ev.target.value)}
          />
        </div>
      </div>
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredPlaces.length > 0 &&
          filteredPlaces.map((place) => (
            <div key={place._id}>
              <Link to={"/place/" + place._id}>
                <div className="bg-gray-500 mb-2 rounded-2xl flex">
                  {place.photos?.[0] && (
                    <img
                      className="rounded-2xl object-cover aspect-square"
                      src={"http://localhost:4000/" + place.photos?.[0]}
                      alt=""
                    />
                  )}
                </div>
                <h2 className="font-bold">{place.adress}</h2>
                <h3 className="text-sm text-gray-500">{place.titre}</h3>
                <div className="mt-1">
                  <span className="font-bold">${place.price}</span> {t('per night')}
                </div>
                <div></div>
              </Link>
              {/* <span
                className={`cursor-pointer absolute text-white py-1 px-2 mt-0 rounded-2xl ${
                  place.rented ? "bg-primary opacity-50" : "bg-white"
                }`}
                disabled={place.rented}
              >
                {t(place.rented ? "Loué" : "")}
              </span> */}


<span
  className={`cursor-pointer absolute py-1 px-2 mt-0 rounded-2xl ${place.rented ? 'bg-green-500 ' : 'bg-white'}`}
  style={{
    color: place.rented ? 'white' : 'black',
    fontWeight: place.rented ? 'bold' : 'normal',
    pointerEvents: place.rented ? 'none' : 'auto'
  }}
  disabled={place.rented}
>
  {t(place.rented ? 'Loué' : '')}
</span>


            

            </div>
          ))}
      </div>
    </>
  );
}
