import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background : rgba(168, 175, 161, 1)
    width:100vw;
    height:100vh;
    padding:0;
    margin:0;
    border:0;
    font-family: 'Lato', sans-serif;
    font-size:16px;
    box-sizing:border-box; 
}    

.root{
    width:100%;
    height:100%;
    justify-content: center;
}
.infinite-scroll-component__outerdiv{
    height: 100%;
    display: flex;
    width: 100%;
    justify-content: center;
}

.infinite-scroll-component {
    width: 100%;
    display: flex;
    height: auto;
    overflow: auto;
    justify-content: center;
}  

.div_routes{
    position: relative;
    top: 0px;
    height: 100%;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.icons_missao{
    width: 2.5rem;
    height:1.5rem;
    color:  rgb(190, 207, 227);
    
}

.marker_pointer{
    margin-top:-30px;
    
  }
.wppIcons{
    width: 1rem;
    color:  rgb(42, 26, 49);
    padding:2px;

    @media (min-width: 720px) {
        width:2rem;
        height:1.4rem;
        padding:0.1rem;
    }
}
.fone:hover{
    color: #fff;
	cursor:pointer;
}

.wpp:hover{
    color: #2AE40C;
	cursor:pointer;
}
.insta:hover{
    color: #E59F09;
    cursor:pointer
}

.close{
    display:none;
    @media (min-width:720px) {
        display:flex        
    }
}


.mobile{
    transition:0.3s;
    width:80vw;
}

.footer {
    margin-top:15rem;
    background: rgba(42, 26, 49, 1);
    color: #cecffb;
    padding: 20px 0;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .company-name {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .contact-info {
    font-size: 16px;
  }

`;
