import {
  storage,
  ref,
  getDownloadURL,
  uploadBytes,
} from "../../config/firebase";

export const uploadImageToFirebase = async (
  file: File,
  location: string
): Promise<string> => {
  try {
    const storageRef = ref(storage, `images/${location}/${file.name}`);
    await uploadBytes(storageRef, file);
    const uploadedFileURL = await getDownloadURL(storageRef);
    return uploadedFileURL;
  } catch (error) {
    console.log("FB file uploading error: ", error);
    throw error;
  }
};
