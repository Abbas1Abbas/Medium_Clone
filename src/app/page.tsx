// app\page.tsx => HomePage
import HomePage from '@/Pages/Home'
import IntroHomePage from '@/Pages/IntroHomePage';

export default function Home() {
  const authenticated = true;

  if(authenticated) return <HomePage />

  return <IntroHomePage />
}