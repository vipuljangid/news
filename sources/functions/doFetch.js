export const host = "/api/";

// Fetch Hook (only for beatstore api)
const doFetch = async (path, method, body, options = {}) => {
  try {
    const res = await fetch(`${host}${path}`, {
      ...options,
      method: method || "GET",
      body: typeof body === "object" ? JSON.stringify(body) : body,
      credentials: options.credentials || "include",
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();

    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export default doFetch;