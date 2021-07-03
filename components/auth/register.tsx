import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
export const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const register=()=>{
      
  }
  return (
    <View>
      <TextInput
        placeholder={"name"}
        value={name}
        onChangeText={(currName) => setName(currName)}
      />
      <TextInput
        placeholder={"email"}
        value={email}
        onChangeText={(currEmail) => setEmail(currEmail)}
      />
      <TextInput
        placeholder={"password"}
        secureTextEntry
        value={password}
        onChangeText={(currPassword) => setPassword(currPassword)}
      />
      <Button onPress={() => console.log(name)} title={"register"} />
    </View>
  );
};
