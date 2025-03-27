import Footer from "../components/Footer"
import Header from "../components/Header"
import RegistrationForm from "../components/RegistrationForm"


function Registro() {
    return (
        <>
            <Header />
            <div className="container">
                <RegistrationForm />
            </div>
            <Footer />
        </>
    )
}

export default Registro