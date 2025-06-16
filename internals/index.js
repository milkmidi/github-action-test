import 'dotenv/config';

const mockKey = process.env.MOCK_KEY;

if (!mockKey) {
  throw new Error('MOCK_KEY is not defined in the environment variables');
}

const secretKey = process.env.SECRET_KEY;
if (!secretKey) {
  throw new Error('SECRET_KEY is not defined in the environment variables');
}
// console.log('Secret Key:', secretKey);
