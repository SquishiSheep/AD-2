import { Grid,GridItem} from "@chakra-ui/react";

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
            {/* if we want to add navbar */}
            </GridItem>
            <GridItem  colSpan={6} >
            {children}
            </GridItem>
            <GridItem rowSpan={1} colSpan={6}>
                {/* footer if we want */}
            </GridItem>
        </Grid>
        </>
    )
}