// just an example fucntion not intended to be used

export const validateUserDetails = (user) => {
  if (!user.name || user.name === "Admin") {
    return false;
  }

  if (!user.email) {
    return false;
  }

  return true;
};
