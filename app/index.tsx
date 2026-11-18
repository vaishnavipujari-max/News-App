import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useRouter } from "expo-router";

import { Colors } from "@/constants/Colors";

import Animated, {
  FadeInRight,
  FadeInDown,
} from "react-native-reanimated";

const Page = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require("@/assets/images/getting-started.jpg")}
        style={styles.background}
        resizeMode="cover"
      >

        <View style={styles.wrapper}>

      
          <Animated.Text
            style={styles.title}
            entering={FadeInRight.delay(300).duration(800)}
          >
            Stay Updated
          </Animated.Text>

          
          <Animated.Text
            style={styles.description}
            entering={FadeInRight.delay(300).duration(800)}
          >
            Get breaking news and personalized updates
            directly to your feed.
          </Animated.Text>

        
          <Animated.View
            entering={FadeInDown.delay(600).duration(800)}
          >
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => router.replace("/(tabs)")}
            >
              <Text style={styles.btnText}>
                Get Started
              </Text>
            </TouchableOpacity>
          </Animated.View>

        </View>

      </ImageBackground>

    </View>
  );
};

export default Page;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 50,
    paddingHorizontal: 30,
    gap: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  title: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 1.5,
    lineHeight: 40,
    textAlign: "center",
  },

  description: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.2,
    lineHeight: 25,
    textAlign: "center",
    marginBottom: 15,
  },

  btn: {
    backgroundColor: Colors.tint,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",
  },

});
