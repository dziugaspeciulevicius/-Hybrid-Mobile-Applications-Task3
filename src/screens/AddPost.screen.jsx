import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated
} from "react-native";
import { postAd } from "../actions/adActions";
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

const AddPostScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  //   const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    // e.preventDefault();
    dispatch(postAd(title, details, price));
    // dispatch(actionGoesHere(title, details, price, userName));
    console.log(title, details, price);
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
            placeholder="Ad title"
            onChangeText={(title) => setTitle(title)}
          />
          <TextInput
            style={styles.input}
            value={details}
            placeholder="Ad details"
            onChangeText={(details) => setDetails(details)}
          />
          <TextInput
            style={styles.input}
            value={price}
            placeholder="Ad price (optional)"
            onChangeText={(price) => setPrice(price)}
          />
          <View style={styles.addButtonContainer}>
            <TouchableOpacity onPress={submitHandler}>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>Post and ad</Text>
              </View>
            </TouchableOpacity>
          </View>
        </FadeInView>
      </View>
    </View>
  );
};

export default AddPostScreen;
// export default connect(null, { postAd })(AddPostScreen);

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
