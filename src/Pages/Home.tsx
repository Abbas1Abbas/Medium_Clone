import MainSectionHome from '@/Components/MainSectionHome'
import SubscriptionDiv from '@/Components/SubscriptionDiv'

const Home = () => {
    return (
        <div className='w-full max-w-[1600px] my-0 mx-auto'>
            <SubscriptionDiv />
            <MainSectionHome />
        </div>
    )
}

export default Home