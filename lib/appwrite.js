import { Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.com/v1",
  platform: "com.vikascreates.aora",
  projectId: "665ac192000129b2f1db",
  databaseId: "665ac5e5003e0724b1d7",
  userCollectionId: "665ac6230007873290b7",
  videoCollectionId: "665ac666002ad79ef641",
  storeageId: "665ac831000bcc9f2581",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);
