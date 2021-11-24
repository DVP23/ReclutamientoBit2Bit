import db from "../utility/Database.js";

export const Registrar = async (data) => {
  const { email, password } = data;
  const dbData = await db.select("*").from("users").where({ email });
  if (dbData.length === 0) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    db("users").insert({ email, password: hashedPassword });
    return "Usuario creado correctamente";
  } else {
    throw "El usuario ya existe";
  }
};
// 200,500,404