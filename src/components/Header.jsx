import logo from "../assets/logo.png"
const Header = () => {
    return (
        <header className="flex justify-start items-center">
            <img src={logo} alt="logo" width="100px" />
            <h1 className="font-bold text-2xl text-gray-700">File Sharing App</h1>
        </header>
    )
}

export default Header