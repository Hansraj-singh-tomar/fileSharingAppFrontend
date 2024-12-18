import UploadContainer from "./UploadContainer";
import HeroImg from "./HeroImg";

const MainContent = () => {
    return (
        <section className="w-full flex justify-center items-center md:py-10 px-1 md:px-4">
            {/* left side  */}
            <UploadContainer />
            {/* right side  */}
            <HeroImg />
        </section>
    )
}

export default MainContent