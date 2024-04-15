import styles from "./Navbar.module.scss"
export default function Navbar() {

    
    return (
     <nav className="bg-transparent  items-center bg-[#A86554] text-[#D9D9D9] justify-start w-full flex flex-col">
      <div>N.</div>
      <div className={styles.upright}>
       <a href="">Home</a>
       <a href="">Works</a>
       <a href="">Contacts</a>
      </div>
     </nav>
    ); 
}
