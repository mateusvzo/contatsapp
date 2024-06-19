import { ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./styles";
import { Avatar } from "@/components/avatar";

export type ContactProps = {
  id: string
  name: string
  image?: ImageProps
}

type Props = TouchableOpacityProps & {
  contact: ContactProps
}

export function Contact({ contact, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Avatar name={contact.name} image={contact.image} />
      <Text style={styles.name}>{contact.name}</Text>
    </TouchableOpacity>
  );
}
