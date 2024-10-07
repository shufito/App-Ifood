import { ScrollView, Text, View } from "react-native";
import Constants from "expo-constants";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { ListRestaurant } from "../components/list";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsHorizontalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 20 }}>
        <Header />
        <Banner />
        <Search />
        <Section
          name="Comidas em alta"
          label="Veja mais"
          size="text-2xl"
          action={() => console.log("clicou no veja mais")}
        />
        <TrendingFoods />
        <Section
          name="Famosos no DevFood"
          label="Veja mais"
          size="text-xl"
          action={() => console.log("clicou no veja mais")}
        />
        <Restaurants />

        <Section
          name="Restaurantes"
          label="Veja mais"
          size="text-xl"
          action={() => console.log("clicou no veja mais")}
        />
        <ListRestaurant />
      </View>
    </ScrollView>
  );
}
