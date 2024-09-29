import Link from "next/link"

export default function Header(){
    return(
        <div className="Parent">
            <ul className="Child">
                <Link href={"/"}>
                <li>Home</li>
                </Link>
                <Link href={"/About-Us"}>
                <li>About-Us</li>
                </Link>
                <Link href={"/Contact-Us"}>
                <li>Contact-Us</li>
                </Link>
                <Link href={"/Jobs"}>
                <li>Jobs</li>
                </Link>

            </ul>
        </div>
    )
}