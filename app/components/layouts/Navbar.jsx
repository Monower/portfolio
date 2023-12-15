const Navbar = () => {
    return (<>
        <nav className="container mx-auto px-[2vw] lg:px-[3vw] flex justify-between sticky top-0 z-50">
            <div className="w-1/3">
                Navbar
            </div>
            <div className="w-2/3">
                <div className="hidden lg:flex justify-between">
                    <ul className="flex space-x-2">
                        <li>about</li>
                        <li>projects</li>
                        <li>resume</li>
                        <li>contact</li>
                    </ul>
                    <button>theme toggle</button>
                </div>
                <div className="lg:hidden float-right">
                    <button>mobile menu</button>
                </div>
            </div>
        </nav>
    </>)
};

export default Navbar;