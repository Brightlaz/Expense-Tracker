import dynamic from 'next/dynamic'
import Loader from '../components/loader';

const DynamicBody = dynamic(() => import('../components/Body'), {
  ssr: false,
  loading: () => <div className='w-screen h-screen'><Loader /></div>
})

export default function Home() {
  return (
    <main className="">
      <DynamicBody />
    </main>
  );
}
