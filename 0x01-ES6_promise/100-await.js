// Import the functions from utils.js
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    // Await the promises from both functions
    const photo = await uploadPhoto();
    const user = await createUser();

    // Return the desired object if both functions succeed
    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    // Handle any errors by returning the fallback object
    return {
      photo: null,
      user: null,
    };
  }
}

