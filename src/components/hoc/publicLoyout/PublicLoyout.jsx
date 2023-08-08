
const PublicLoyout = ({ children }) => {
    return (
        <div className="wrapper">
            <div className="container">
                <main className="main">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default PublicLoyout;