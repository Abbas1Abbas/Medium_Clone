import MainHomeLft from "./MainHomeLft"
import MainHomeRgt from "./MainHomeRgt"

const MainSectionHome = () => {
    return (
        <div className="w-full flex flex-row gap-2">
            <MainHomeLft />
            <MainHomeRgt />
        </div>
    )
}

export default MainSectionHome