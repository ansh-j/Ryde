import { icons } from "@/constants";
import { GoogleInputProps } from "@/types/type";
import { Image, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
  >
    <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder="where do you wanna go"
      debounce={200}
      styles={{
        textInputContainer: {
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 30,
          marginHorizontal: 20,
          position: "relative",
          shadowColor: "#d4d4d4",
        },
        textInput: {
          backgroundColor: textInputBackgroundColor || "white",
          fontSize: 16,
          fontWeight: "600",
          marginTop: 5,
          width: "100%",
          borderRadius: 200,
        },
        listView: {
          backgroundColor: textInputBackgroundColor || "white",
          position: "relative",
          width: "100%",
          borderRadius: 10,
          shadowColor: "#d4d4d4",
          zIndex: 9,
        },
      }}
      onPress={(data, details = null) => {
        handlePress({
          latitude: details?.geometry.location.lat!,
          longitude: details?.geometry.location.lat!,
          address: data.description,
        });
      }}
      query={{
        key: googlePlacesApiKey,
        language: "en",
      }}
      renderLeftButton={() => (
        <View className="justify-center items-center w-6 h-6">
          <Image
            source={icon ? icon : icons.search}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </View>
      )}
      textInputProps={{
        placeholderTextColor:'gray',
        placeholder: initialLocation ?? 'where do you want to go'
      }}
    />
  </View>
);

export default GoogleTextInput;
