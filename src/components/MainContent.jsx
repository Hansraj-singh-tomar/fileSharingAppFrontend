import UploadContainer from "./UploadContainer";
import HeroImg from "./HeroImg";

const MainContent = () => {
    return (
        <section className="w-full flex justify-center items-center py-10 px-4">
            {/* left side  */}
            <UploadContainer />
            {/* right side  */}
            <HeroImg />
        </section>
    )
}

export default MainContent