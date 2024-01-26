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

export const fetchCart = async (userId) => {
  try {
    const userCart = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cart/courses/${userId}`
    );
    return userCart.data;
  } catch (error) {
    console.error("Error while fetching cart:", error);
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
  setDeletingId
) => {
  try {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`, {
      courseId,
      userId,
    });
    setDeletingId(courseId);
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

export const setTransactionId = async (transactionId = "", userId = "") => {
  try {
    const updateOrder = await axios.put(
      `http://localhost:8081/api/purchaseOrder/updateOrder/${userId}`,
      { transactionID: transactionId }
    );

    return updateOrder;
  } catch (error) {
    return {
      ok: false,
      message: "No se pudo actualizar el id de la transaccion",
    };
  }
};

export const paypalCheckPayment = async (transactionID = "", userId = "") => {
  //console.log({ transactionID });
  //console.log({ id_user });

  const authToken = await getPaypalBearerToken();
  if (!authToken) {
    return {
      ok: "Error",
      message: "Could not get verification token",
    };
  }

  const resp = await verifyPayPalPayment(transactionID, authToken);
  if (!resp) {
    return {
      ok: "Error",
      message: "Error verifying payment",
    };
  }

  const updateOrder = await axios.put(
    `http://localhost:8081/api/purchaseOrder/updateOrder/${userId}`,
    { status: true }
  );
  //console.log(updateOrder);
};

const getPaypalBearerToken = async () => {
  const PAYPAL_CLIENT = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const PAYPAL_SECRET = process.env.NEXT_PUBLIC_PAYPAL_SECRET;
  const oauth2Url = process.env.NEXT_PUBLIC_PAYPAL_OAUTH_URL;

  const base64Token = Buffer.from(
    `${PAYPAL_CLIENT}:${PAYPAL_SECRET}`,
    "utf-8"
  ).toString("base64");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Basic ${base64Token}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
  };
  try {
    const response = await fetch(oauth2Url, {
      ...requestOptions,
      cache: "no-store",
    });
    const { access_token } = await response.json();

    return access_token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const verifyPayPalPayment = async (
  paypalTransactionId = "",
  bearerToken = ""
) => {
  const paypalOrderUrl = `${process.env.NEXT_PUBLIC_PAYPAL_ORDERS_URL}/${paypalTransactionId}`;
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };
  try {
    const response = await fetch(paypalOrderUrl, {
      ...requestOptions,
      cache: "no-store",
    });
    const dataFetch = await response.json();
    return dataFetch;
  } catch (error) {
    console.error(error);
    return null;
  }
};
