import Link from "next/link";

export default function Linkpage() {

    return(
        <main>
            <header>
                <h1>Contacts</h1>
            </header>
            <body>
                <section>
                    <h3>Github</h3>
                    <Link href="https://github.com/BensRandomStash">Click here!</Link>
                </section>
                <section>
                    <h3>LinkedIn</h3>
                    <Link href="https://www.linkedin.com/in/benjamin-mazerolle-542129255/">Click here!</Link>
                </section>
            </body>
            <footer>
                <h5>Other Pages:</h5>
                <Link href='Homepage'>Home</Link>
                <Link href='Aboutpage'>About me.</Link>
            </footer>
        </main>
    )


}