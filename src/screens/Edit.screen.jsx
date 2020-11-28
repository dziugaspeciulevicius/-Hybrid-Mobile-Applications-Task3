import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import { editAd } from "../actions/adActions";
import { connect } from "react-redux";


/*========== FADE-IN ANIMATION ==========*/
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const EditScreen = ({ navigation, route }) => {
  const { adId, adTitle, adDetails, adPrice } = route.params;
  // const adList = useSelector((state) => state.adList);
  // const { editAd } = adList;

  const [title, setTitle] = useState(title);
  const [details, setDetails] = useState(details);
  const [price, setPrice] = useState(price);
  // const [key, setKey] = useState(key);

  const dispatch = useDispatch();

  const submitHandler = (someid, sometitle, somedets, someprice) => {
    dispatch(editAd(someid, sometitle, somedets, someprice));
    navigation.navigate("Home");
    setTitle("");
    setDetails("");
    setPrice("");
  };
  return (
    <View style={styles.container}>
    <View style={styles.inputWrapper}>
    <FadeInView>
          <TextInput
            style={styles.input}
            value={title}
            placeholder={adTitle}
            onChangeText={(title) => setTitle(title)}
          />
          <TextInput
            style={styles.input}
            value={details}
            placeholder={adDetails}
            onChangeText={(details) => setDetails(details)}
          />
          <TextInput
            style={styles.input}
            value={price}
            placeholder={adPrice}
            onChangeText={(price) => setPrice(price)}
          />
          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                submitHandler(adId, title, details, price);
              }}
            >
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>Edit an ad</Text>
              </View>
            </TouchableOpacity>
          </View>
          </FadeInView>
        </View>
      </View>
  );
};

export default EditScreen;
// export default connect(null, { editAd })(EditScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputWrapper: {
    width: "70%",
    alignContent: "center",
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 2,
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
    borderColor: "#667EEA",
    color: "black",
  },
  addButton: {
    backgroundColor: "#667EEA",
    width: "100%",
    height: 30,
    justifyContent: "center",
    marginTop: 20,
    alignContent: "center",
    textAlign: "center",
    marginTop: 10,
    borderRadius: 30,
  },
  addButtonText: {
    alignSelf: "center",
    textAlignVertical: "center",
    color: "#fff",
  },
});
