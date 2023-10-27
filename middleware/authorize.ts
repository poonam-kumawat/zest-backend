import * as jwt from "jsonwebtoken";

export function authorize(req: any, res: any, next: any) {
  try {
    let token = req.get("authorization");
    if (!token) {
      return res.status(404).json({
        success: false,
        msg: "Token not found",
      });
    }
    token = token.split(" ")[1];
    const decoded: any = jwt.verify(token, "accessSecret");
    req.email = decoded.email;
    next();
  } catch (error: any) {
    console.error(error);
    return res.status(401).json({ success: false, msg: error.message });
  }
}
export function verifyRefresh(email: any, token: any) {
  try {
    const decoded: any = jwt.verify(token, "refreshSecret");
    console.log("kya hai", decoded);
    console.log("email kya hai", email);
    return decoded.email === email;
  } catch (error) {
    console.error(error);
    return false;
  }
}
