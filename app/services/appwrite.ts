import { Client, Account } from 'appwrite';

const appwrite = new Client();

appwrite
  .setEndpoint(process.env.APPWRITE_ENDPOINT || 'https://appwrite.example.com/v1')
  .setProject(process.env.APPWRITE_PROJECT_ID || 'launow_project');

export const account = new Account(appwrite);
export default appwrite; 