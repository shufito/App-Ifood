import { useEffect, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export function Restaurants() {
  const [restauranst, setRestauranst] = useState([]);

  useEffect(() => {
    async function getRestauranst() {
      const response = await fetch("http://192.168.1.5:3000/restaurants");
      const data = await response.json();
      setRestauranst(data);
    }
    getRestauranst();
  }, []);
  return <Pressable className="flex flex-col rounded-xl"></Pressable>;
}
