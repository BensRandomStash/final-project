import Link from "next/link";

export default function Linkpage() {

    return(
        <main pageBackground="bg-black">
            <header>
                <h1 headerText="text-white">Contacts</h1>
            </header>
            <body>
                <section>
                    <h3 headerText="text-blue">Github</h3>
                    <Link href="https://github.com/BensRandomStash" linkText="text-white">Click here!</Link>
                </section>
                <section>
                    <h3 headerText="text-purple">LinkedIn</h3>
                    <Link href="https://www.linkedin.com/in/benjamin-mazerolle-542129255/" linkText="text-white">Click here!</Link>
                </section>
            </body>
            <footer footerBackground="bg-purple-800 border border-blue-800">
                <h5 headerText="text-white">Other Pages:</h5>
                <Link href='Page' linkText="text-white">Home</Link>
                <Link href='Aboutpage' linkText="text-white">About me.</Link>
            </footer>
        </main>
    )


}