import Link from "next/link";

export default function Aboutpage() {

    const myself = require('./Myself.jpg');

    return(
        <main pageBackground="bg-black">
            <header>
                <h1 headerText="text-white">
                    About Me
                </h1>
            </header>
            <body>
                <section>
                    <h3 headerText="text-white">
                        General Info:
                    </h3>
                    <p text="text-aqua-550">Name: Benjamin Mazerolle</p>
                    <p text="text-aqua-550">Age: 19 years old</p>
                    <p text="text-aqua-550">Date of Birth: June 19th, 2004</p>
                    <img src={myself} alt="Photo of Myself"/>
                </section>
                <section>
                    <h3 headerText="text-white">
                        Education:
                    </h3>
                    <p text="text-aqua-550">Southern Alberta Institute of the Arts (2022-2024)</p>
                    <p text="text-aqua-550">Major: Software Developer</p>
                </section>
                <section>
                    <h3 headerText="text-white">
                        Skills and hobbies:
                    </h3>
                    <p text="text-aqua-550">Programming (C#, Python, C++, Java, HTML)</p>
                    <p text="text-aqua-550">Art (Traditional and Digital)</p>
                </section>
            </body>
            <footer footerBackground="bg-purple-800 border border-blue-800">
                <h5 headerText="text-white">
                    Other Pages:
                </h5>
                <Link href='Page' linkText="text-white">Home</Link>
                <Link href='Linkpage' linkText="text-white">Contacts</Link>
            </footer>
        </main>
    )


}