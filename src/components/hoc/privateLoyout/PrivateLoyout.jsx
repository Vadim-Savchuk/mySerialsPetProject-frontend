import Header from "../../logic/header/Header"

const PrivateLoyout = ({ children }) => {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <main className="children">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PrivateLoyout;