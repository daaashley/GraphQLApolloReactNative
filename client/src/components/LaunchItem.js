import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";
import classNames from "classnames";
export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <ScrollView style={{ padding: 15 }} className="card card-body mb-3">
      <View className="row">
        <View className="col-md-9">
          <Text>
            Mission:{" "}
            <Text
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success
              })}
            >
              {mission_name}
            </Text>{" "}
          </Text>
          <Text>Date: {launch_date_local}</Text>
        </View>
        <View className="col-md-3">
          <Button title="Launch Details" className="btn btn-secondary" />
        </View>
      </View>
    </ScrollView>
  );
}
