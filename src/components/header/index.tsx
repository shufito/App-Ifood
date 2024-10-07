import { Pressable, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-lg flex justify-center items-center">
        <Ionicons name="menu" size={20} color={"#121212"} />
      </Pressable>
      <View>
        <Text className="text-center text-sm text-slate-700">Localização</Text>
        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color={"#FF0000"} />
          <Text className="text-lg font-bold">Fortaleza</Text>
        </View>
      </View>
      <Pressable className="w-10 h-10 bg-white rounded-lg flex justify-center items-center">
        <Feather name="bell" size={20} color={"#121212"} />
      </Pressable>
    </View>
  );
}
