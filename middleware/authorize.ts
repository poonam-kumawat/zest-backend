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
    if (req.body.email) {
      if (req.body.email !== decoded.email) {
        return res.status(403).json({
          success: false,
          msg: "Unauthorized",
        });
      }
    }
    req.email = decoded.email;
    next();
  } catch (error: any) {
    return res.status(401).json({ success: false, msg: error.message });
  }
}

export function verifyRefresh(email: any, token: any) {
  try {
    const decoded: any = jwt.verify(token, "refreshSecret");
    return decoded.email === email;
  } catch (error) {
    return false;
  }
}
