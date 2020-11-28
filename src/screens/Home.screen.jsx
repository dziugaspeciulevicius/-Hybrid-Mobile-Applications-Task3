import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Animated,
} from "react-native";
import { getAds, deleteAd } from "../actions/adActions";
import { connect } from "react-redux";
// import { adList } from "../store.js";
import Icon from "react-native-vector-icons/FontAwesome";
import _ from "lodash";

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getAds();
  }

  render() {
    console.log("home render", this.props.listOfAds);

    // animatedAnimation = new Animated.Value(200);
    // animate = (value) => {
    //   Animated.timing(
    //     this.animatedAnimation,
    //     {
    //       toValue: value,
    //       duration: 750
    //     }
    //   ).start()
    // }

    return (
      <Animated.View style={styles.container} >
        <FlatList
          style={styles.list}
          data={this.props.listOfAds}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View style={styles.listView}>
                <Text style={styles.initialText}>
                  Title: <Text style={styles.insideText}>{item.title}</Text>
                </Text>
                <Text style={styles.initialText}>
                  Details: <Text style={styles.insideText}>{item.details}</Text>
                </Text>
                <Text style={styles.initialText}>
                  Price: <Text style={styles.insideText}>{item.price}</Text>{" "}
                </Text>
                <View style={styles.postsStyles}>
                  <TouchableHighlight
                    onPress={() =>
                      // this.props.navigation.navigate("Edit", { ...item })
                      {
                        this.props.navigation.navigate("Edit", {
                          adId: item.key,
                          adTitle: item.title,
                          adDetails: item.details,
                          adPrice: item.price,
                        });
                      }
                    }
                  >
                    <View style={styles.iconGap}>
                      <Icon size={30} color="white" name="edit" />
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => this.props.deleteAd(item.key)}
                  >
                    <View>
                      <Icon size={30} color="red" name="close" />
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            );
          }}
        />
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) => {
  const listOfAds = _.map(state.adList.adLists, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });
  return {
    // state.fromStore.fromReducer
    // listOfAds: state.adList.adLists,
    listOfAds,
  };
};

export default connect(mapStateToProps, { getAds, deleteAd })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  list: {
    width: "95%",
  },
  listView: {
    elevation: 8,
    borderRadius: 15,
    backgroundColor: "#667EEA",
    padding: 20,
    marginBottom: 15,
  },
  initialText: {
    fontWeight: "700",
  },
  insideText: {
    fontWeight: "300",
  },
  postsStyles: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // marginTop: 25
  },
  iconGap: {
    marginRight: 10,
  },
});
