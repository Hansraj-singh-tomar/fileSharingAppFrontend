import heroImage from "../assets/heroImage.svg"
const HeroImg = () => {
    return (
        <section className="flex-1 hidden md:block">
            <img src={heroImage} alt="hero image" />
        </section>
    )
}

export default HeroImg