const ROLES = {
  User: {
    clave: 2001,
    url: "user",
  },
  Admin: {
    clave: 5150,
    url: "admin",
  },
};
export const searchRoles = (value) => {
  let urlP = "";
  for (const prop in ROLES) {
    if (value.includes(ROLES[prop].clave)) {
      urlP = `/${ROLES[prop].url}`;
      break;
    }
  }
  return urlP;
};
export default ROLES;
