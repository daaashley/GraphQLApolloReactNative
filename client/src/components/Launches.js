import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Fragment } from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import LaunchItem from "./LaunchItem";
const LAUNCHES_QUERY = gql`
  query {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
class Launches extends Component {
  render() {
    return (
      <View>
        <Text className="display-4 my-3" />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            //loading is a boolean, data is data that is fetch
            if (loading) return <Text>Loading...</Text>;
            if (error) console.log(error);
            return (
              <View>
                {data.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </View>
            );
          }}
        </Query>
      </View>
    );
  }
}

export default Launches;
