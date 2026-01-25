import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const HomePage = async () => {
  const {userId} = await auth();
  if(!userId) {
    redirect('/sign-in');
  }else{
    redirect('/projects');
  }
}

export default HomePage