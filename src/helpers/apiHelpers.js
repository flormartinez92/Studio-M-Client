import axios from "axios";

export const fetchUser = async () => {
  try {
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/me`,
      {
        withCredentials: true,
      }
    );
    return user.data;
  } catch (error) {
    console.error("User is not authenticated", error);
    return null;
  }
};

export const fetchFavorites = async (userId) => {
  try {
    const userFavorites = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/${userId}`
    );
    return userFavorites.data;
  } catch (error) {
    console.error("Error while fetching favorites:", error);
    return [];
  }
};

export const removeFavorite = async (courseId, userId) => {
  try {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/remove/${courseId}/${userId}`
    );
  } catch (error) {
    console.error("Error while removing favorite:", error);
  }
};

export const addFavorite = async (courseId, userId) => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/favorites/add/${courseId}/${userId}`
    );
  } catch (error) {
    console.error("Error while adding favorite:", error);
  }
};

export const handleCartClick = async (
  courseId,
  userId,
  setShowAlert,
  setCount
) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`, {
      courseId,
      userId,
    });
    setCount(1);
  } catch (error) {
    setShowAlert(true);
    console.error("Error while adding cart:", error);
  }
};

export const fetchUserProject = async (userId) => {
  try {
    const userProject = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user/project/${userId}`
    );
    return userProject.data;
  } catch (error) {
    console.error("User has no project", error);
    return null;
  }
};
