import { useEffect, useState } from "react";
import { View } from "react-native";
import { ItemRestaurant } from "./item";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

export function ListRestaurant() {
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
    <View className="flex-1 w-ful h-full gap-4 mb-11">
      {restauranst.map((item) => (
        <ItemRestaurant data={item} key={item.id} />
      ))}
    </View>
  );
}
