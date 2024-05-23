import { useContext } from 'react';
import Editor from "./Editor";
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';



const Container = styled(Box)`
    display: flex;
    background-color:#060606;
    height: 52vh;
`
const Code = () => {

     const { html, css, js, setHtml, setCss, setJavaScript } = useContext(DataContext);

    return (
        <Container>
             <Editor
                  languahe="xml"
                  heading="HTML"
                  icon="/"
                  color="#FF3C41"
                  value={html}
                  onChange={setHtml}
             />
             <Editor 
                  languahe="css"
                  heading="CSS"
                  icon="*"
                  color="#0EBEFF"
                  value={css}
                  onChange={setCss}
            />
             <Editor 
                  languahe="JavaScript"
                  heading="JS"
                  icon="{}"
                  color="#FCD000"
                  value={js}
                  onChange={setJavaScript}
             />

        </Container>
    )
}
export default Code;
