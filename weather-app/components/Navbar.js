import Link from "next/link";
<<<<<<< Updated upstream
import Image from "next/image";
import ThemeSwitcher from "@/components/ThemeSwitcher"
=======
>>>>>>> Stashed changes

export default function Navbar(){
    return(
        <nav>
            <div className="logo">
                <img src="/logo.png" alt="logo" width={80} height={42} />
            </div>
            <div>
                <Link href="/">HOME</Link>
                <Link href="/posts">POSTS</Link>
                <Link href="/contact">CONTACT</Link>
<<<<<<< Updated upstream
                <ThemeSwitcher></ThemeSwitcher>
=======
                
                {/*<select name="theme">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>*/}
>>>>>>> Stashed changes
            </div>
        </nav>
    )
}
