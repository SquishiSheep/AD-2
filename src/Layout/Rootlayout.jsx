import { Grid,GridItem} from "@chakra-ui/react";
import Navbar from "../components/mainComponents/Navbar";
import Footer from "../components/mainComponents/Footer";
import Chatbox from "../components/Chatbox";

// eslint-disable-next-line react/prop-types
export default function Rootlayout({children}){
    return(
        <>
        <Grid
            height="100vh"
            templateRows="auto 1fr auto"
            templeteColumns="repeat(6,1fr)"
        >
            <GridItem bg="white" colSpan={6} rowSpan={1} position="sticky" top="0" zIndex={1000}>
            {/* note here: rowspan means how many row do you want to give for that section, and same is for colspan */}
                <Navbar/>
            </GridItem>
            <GridItem  colSpan={6} backgroundImage="radial-gradient(at 0% 0%, rgb(229, 233, 255), transparent 68%), radial-gradient(at 0% 100%, rgb(176, 229, 165), transparent 60%), radial-gradient(at 100% 100%, rgb(107, 132, 255), transparent 60%);">
            <Chatbox/>
            {children}
            </GridItem>
            <GridItem rowSpan={1} colSpan={6}>
                <Footer/>
            </GridItem>
        </Grid>
        </>
    )
}