import Chatbot from '@/components/Chatbot';
import UserInfo from './userInfo';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <Chatbot />
      <UserInfo />
    </main>
  );
}
