import { Image, Pressable, Text, View } from "react-native";
import { FoodProps } from "..";
import { Ionicons } from "@expo/vector-icons";

export function Food({ data }: { data: FoodProps }) {
  return (
    <Pressable className="flex flex-col rounded-xl">
      <Image source={{ uri: data.image }} className="w-44 h-36 rounded-xl" />
      <View className="flex flex-row bg- bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-3 px-2 py-1">
        <Ionicons name="star" size={14} color={"#ca8a04"} />
        <Text className="text-white text-sm">{data.rating}</Text>
      </View>
      <Text className="text-green-700 font-medium text-lg">
        R$ {data.price}
      </Text>
      <Text className="text-black mt-1">{data.name}</Text>
      <Text className="text-neutral-600 text-sm">
        {data.time} - R${data.delivery}
      </Text>
    </Pressable>
  );
}
