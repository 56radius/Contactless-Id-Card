import React from "react";
import renderer from "react-test-renderer";
import LoginForm from ".././components/LoginForm";
import { render, fireEvent } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
  it("Check the login button", () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapShot;
  });
});
