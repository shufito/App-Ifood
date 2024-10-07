import { Image, Pressable, Text } from "react-native";
import { RestaurantsProps } from "..";

export function Restaurant({ data }: { data: RestaurantsProps }) {
  return (
    <Pressable className="flex flex-col rounded-xl items-center justify-center">
      <Image source={{ uri: data.image }} className="w-20 h-20 rounded-full" />
      <Text
        className="mt-2 w-20 text-sm text-center leading-4"
        numberOfLines={2}
      >
        {data.name}
      </Text>
    </Pressable>
  );
}
