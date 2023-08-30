import { DndProvider, DndProviderProps, Draggable, Droppable } from "@mgcrea/react-native-dnd";
import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import { State } from "react-native-gesture-handler";

export const BasicExample: FunctionComponent = () => {
  const handleDragEnd: DndProviderProps["onDragEnd"] = ({ active, over }) => {
    "worklet";
    if (over) {
      console.log("onDragEnd", { active, over });
    }
  };

  const handleBegin: DndProviderProps["onBegin"] = () => {
    "worklet";
    console.log("onBegin");
  };

  const handleFinalize: DndProviderProps["onFinalize"] = ({ state }) => {
    "worklet";
    console.log("onFinalize");
    if (state !== State.FAILED) {
      console.log("onFinalize");
    }
  };

  return (
    <View style={{ padding: 64, height: "100%" }}>
      <Text style={{ color: "black" }}>BasicExample</Text>

      <DndProvider onBegin={handleBegin} onFinalize={handleFinalize} onDragEnd={handleDragEnd}>
        <Droppable id="drop" style={styles.box}>
          <Text>DROP</Text>
        </Droppable>
        <Draggable id="drag" style={styles.box}>
          <Text>DRAG</Text>
        </Draggable>
      </DndProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 24,
    padding: 24,
    height: 128,
    width: 128,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkseagreen",
  },
});
