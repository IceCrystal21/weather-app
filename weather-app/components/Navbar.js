import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher"

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
                <ThemeSwitcher></ThemeSwitcher>
            </div>
        </nav>
    )
}
