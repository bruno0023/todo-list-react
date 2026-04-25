import Header from "../core-components/header";
import MainContent from "../core-components/main-content";
import Footer from "../core-components/footer";
import { Outlet } from "react-router";
import Container from "../components/container";



export default function LayoutMain() {
    return (
        <>
            <Container>
                <Header />
                <MainContent>
                    <Outlet />
                </MainContent>
                <Footer />
            </Container>
        </>
    )
}