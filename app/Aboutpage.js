import Link from "next/link";

export default function Aboutpage() {

    return(
        <main>
            <header>
                <h1>
                    About Me
                </h1>
            </header>
            <body>
                <section>
                    <h3>
                        General Info:
                    </h3>
                    <p>Name: Benjamin Mazerolle</p>
                    <p>Age: 19 years old</p>
                    <p>Date of Birth: June 19th, 2004</p>
                    <p>(Photo goes here)</p>
                </section>
                <section>
                    <h3>
                        Education:
                    </h3>
                    <p>Southern Alberta Institute of the Arts (2022-2024)</p>
                    <p>Major: Software Developer</p>
                </section>
                <section>
                    <h3>
                        Skills and hobbies:
                    </h3>
                    <p>Programming (C#, Python, C++, Java, HTML)</p>
                    <p>Art (Traditional and Digital)</p>
                </section>
            </body>
            <footer>
                <h5>
                    Other Pages:
                </h5>
                <Link href='Homepage'>Home</Link>
                <Link href='Linkpage'>Contacts</Link>
            </footer>
        </main>
    )


}