import Link from "next/link"
import { useState } from "react"


export default function Homepage() {

    const handleClick = () => {
        alert("Hi!");
    }

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Hello " + name + "!");
    }

    return(
        <main pageBackground="bg-black">
            <header>
                <h1 headerText="text-white">Welcome!</h1>
            </header>
            <body>
                <section linkSectionStyling="bg-purple-800 border border-blue-800">
                    <h3 headerText="text-white">Here are some links for more information about me.</h3>
                    <Link href='Aboutpage' linkText="text-white">About me.</Link>
                    <Link href='Linkpage' linkText="text-white">Contacts</Link>
                </section>
                <section>
                    <h3 headerText="text-white">Here are some examples to show you what I can do!:</h3>
                    <button onClick={handleClick} buttonStyling="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700">Click me!</button>
                </section>
                <section>
                    <form onSubmit={handleSubmit}>
                        <label label="text-white">
                            What is your name?
                            <input type="text" placeholder="Enter here." value={name} onChange={handleChange} styling="bg-white border-blue-800"/>
                        </label>
                        <input type="submit" value="Submit" styling="text-white bg-red-550"/>
                    </form>
                </section>
            </body>
        </main>
    )
}
