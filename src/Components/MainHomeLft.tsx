import BlogCards from "./BlogCards"
import SuggestionList from "./SuggestionList"

const MainHomeLft = () => {
    return (
        <div className="py-[3%] px-[5%] md:px-[10%] w-[100%] lg:w-[70%]">
            <SuggestionList />
            <BlogCards />
        </div>
    )
}

export default MainHomeLft