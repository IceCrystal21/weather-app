import Image from "next/image";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
    const [theme, Settheme] = useState("Light")
    var sun = "/sun.png"
    var moon = "/moon.png"
    

    useEffect(() => {
        var css_var = document.documentElement
        if (theme == "Light") {
                    css_var.style.setProperty("--main_bg", "#d5f0ff")
                    css_var.style.setProperty("--nav_bg", "#ffffff")
                    css_var.style.setProperty("--text_col", "#000000")
                    css_var.style.setProperty("--contact_bg", "#ffffff")
                } else {
                    css_var.style.setProperty("--main_bg", "#1b1b1b")
                    css_var.style.setProperty("--nav_bg", "#333333")
                    css_var.style.setProperty("--text_col", "#ffffff")
                    css_var.style.setProperty("--contact_bg", "#414141")
                }}, [theme] ) 
    return(
        <Image alt="" src={theme=="Light" ? sun : moon} width="40" height="40" onClick={() => {
            if (theme == "Light") {
                Settheme("Dark")
            } else {
                Settheme("Light")
            }
        }}></Image>
    )
}