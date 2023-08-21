import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";

interface IInputProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  handleChange: Function;
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

type TFormWoofstagram = {
  email: string;
  password: string;
  passwordRetype: string;
  petname: string;
  petbirth: string;
  breed: string;
  favoritetoy: string;
};

const InputField = (props: IInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textField}>{props.label}</Text>
      <TextInput
        style={styles.inputField}
        placeholder={props.placeholder}
        onChangeText={(text) => props.handleChange(text, props.name)}
        value={props.value}
        secureTextEntry={props.name.includes("password")}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};

const App = () => {
  const [formWoofstagram, setFormWoofstagram] = useState<TFormWoofstagram>({
    email: "",
    password: "",
    passwordRetype: "",
    petname: "",
    petbirth: "",
    breed: "",
    favoritetoy: "",
  });

  const handleChange = (text: string, name: string) => {
    setFormWoofstagram({
      ...formWoofstagram,
      [name]: text,
    });
  };

  const checkPasswords = (passwordRetype: string) => {
    if (formWoofstagram.password !== passwordRetype) {
      alert("Passwords do not match, please try again.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <InputField
        handleChange={handleChange}
        label="Email here"
        placeholder="email"
        name="email"
        value={formWoofstagram.email}
      />
      <InputField
        handleChange={handleChange}
        label="Password here"
        placeholder="password"
        name="password"
        value={formWoofstagram.password}
      />
      <InputField
        label="Confirm password"
        placeholder="Re-type your password here"
        onSubmitEditing={(event: any) => {
          checkPasswords(event.nativeEvent.text);
        }}
        handleChange={handleChange}
        name="passwordRetype"
        value={formWoofstagram.passwordRetype}
      />
      <InputField
        handleChange={handleChange}
        label="Your pet name"
        placeholder="Pet name"
        name="petname"
        value={formWoofstagram.petname}
      />
      <InputField
        handleChange={handleChange}
        label="Your pet date of birth"
        placeholder="Pet birth"
        name="petbirth"
        value={formWoofstagram.petbirth}
      />
      <InputField
        handleChange={handleChange}
        label="It breed"
        placeholder="Breed"
        name="breed"
        value={formWoofstagram.breed}
      />
      <InputField
        handleChange={handleChange}
        label="Your favorite pet's toy"
        placeholder="Favorite toy"
        name="favoritetoy"
        value={formWoofstagram.favoritetoy}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    padding: 32,
  },
  textField: {
    margin: 2,
    fontSize: 14,
  },
  inputField: {
    padding: 8,
    fontSize: 18,
    borderRadius: 10,
    border: "1px solid #0004",
    shadowColor: "#EDF1FD",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default App;
