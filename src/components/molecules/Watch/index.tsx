import React from "react";
import {
  ImageStyle,
  StyleProp,
  Text,
  View,
} from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

interface CardProps {
  item: {
    image_url: string;
    title: string;
    subtitle: string;
    type: string;
    description?: string;
    video: string;
  };

  style?: StyleProp<ImageStyle>;
}

export function Watch({ item, style }: CardProps) {
  return (
    <View style={{flex: 1}} >

      <Text>A</Text>
      <YoutubeIframe
        play={false}
        onReady={() => console.log("Player is ready")}
        onChangeState={(state) => console.log("Player state:", state)}
        height={300}
        width={200}
        videoId={item.video}
      />
    </View>
  );
}
