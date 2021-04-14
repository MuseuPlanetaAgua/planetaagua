import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }
    
    *:focus {
        outline: 0;
    }

    html {
        
        font-size: 62.5%;
    }

    #root {
        
    --PrincipalColor: #01558C;
    --SecondaryColor: #03ACD5;
    
    

}

html, body, #root {
    width:100%;
    height:100vh;

    }

    body {
        font-size: 1.6rem;
        background-color: #fff;
        -webkit-font-smoothing: antialiased !important;
        box-sizing: border-box;
overflow-x:hidden;

        h1 {
      font-family: 'Merriweather', serif;
        }

        p{ font-family: DIN;}
    }


    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }




`;
