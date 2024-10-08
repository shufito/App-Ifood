import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Restaurant } from "./restaurantItem";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function Restaurants() {
  const [restauranst, setRestauranst] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    async function getRestauranst() {
      const response = await fetch("http://192.168.1.5:3000/restaurants");
      const data = await response.json();
      setRestauranst(data);
    }
    getRestauranst();
  }, []);
  return (
    <FlatList
      data={restauranst}
      renderItem={({ item }) => <Restaurant data={item} />}
      contentContainerStyle={{ gap: 14 }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
}
