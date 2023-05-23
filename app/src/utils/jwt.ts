import jwt from 'jsonwebtoken';

// 生成JWT
export function generateToken(data: any, secret: string, expiresIn: string) {
  const token = jwt.sign(data, secret, { expiresIn });
  return token;
}

// 验证JWT
export function verifyToken(token: string, secret: string, ) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return null;
  }
}