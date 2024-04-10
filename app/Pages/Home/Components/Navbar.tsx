import styles from "./Navbar.module.scss"
export default function Navbar() {

    const NavLinks = [{ name: "Home" }, { name: "About" }, { name: "Works" }];
    return (
        <nav className="bg-transparent items-center text-[#D9D9D9] justify-between w-full flex flex-col">
            <div className="flex lg:gap-11 lg:p-3 lg:text[22px] sm:text-[10px] sm:gap-4 sm:px-2 md:text-[15px] md:gap-7 md:px-1 relative w-max">
                {NavLinks.map((item, index) => (
                    <h4 className="cursor-pointer" key={index}>
                        {item.name}
                    </h4>
                ))}
            </div>
        </nav>
    );
}
