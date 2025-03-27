import Footer from "../components/Footer"
import Header from "../components/Header"
import Authentication from "../components/Authentication"

function Login() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="div-login">
                    <Authentication />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login