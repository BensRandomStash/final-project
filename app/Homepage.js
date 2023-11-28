import Link from "next/link"
import { useState } from "react"


export default function Homepage() {

    const handleClick = () => {
        alert("Hi!")
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
        <main>
            <header>
                <h1>Welcome!</h1>
            </header>
            <body>
                <section>
                    <h3>Here are some links for more information about me.</h3>
                    <Link href='Aboutpage'>About me.</Link>
                    <Link href='Linkpage'>Contacts</Link>
                </section>
                <section>
                    <h3>Here's some examples to show you what I can do!:</h3>
                    <button onClick={handleClick}>Click me!</button>
                </section>
                <section>
                    <form onSubmit={handleSubmit}>
                        <label>
                            What's your name?
                            <input type="text" placeholder="Enter here." value={name} onChange={handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </section>
            </body>
        </main>
    )
}
