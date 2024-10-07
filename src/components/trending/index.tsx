import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { Food } from "./food";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.1.5:3000/foods");
      const data = await response.json();
      setFoods(data);
    }
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <Food data={item} />}
      contentContainerStyle={{ gap: 14 }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    />
  );
}
