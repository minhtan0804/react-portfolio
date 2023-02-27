import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
  box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    border: none;
    text-decoration: none;
    list-style: none;
    outline: none;
  }

  html {
    scroll-behavior: smooth;

  }

  ::-webkit-scrollbar {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Poppins', sans-serif;

    font-size: 1rem;
    
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;
    background-image: url(../src/assets/images/bg-texture.png);
  }

  button {
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  :root { 
  --font-family: 'Poppins', sans-serif;

  --color-bg: #1f1f38;
  --color-bg-variant: #2c2c6c;
  --color-primary: #4db5ff;
  --color-primary-variant:  rgba(77,181,255,0.4);
  --color-white: #fff;
  --color-light: rgba(255,255,255,0.6);

  --container-with-lg: 75%;
  --container-with-md: 86%;
  --container-with-sm: 90%;

  --transition: all 400ms ease
}



.container {
  width: var(--container-with-lg);
  margin: 0 auto;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
}

h1 {
  font-size: 2.5rem;
}


section {
  margin-top: 8rem;
}

section > h2, section > h5 {
  text-align: center;
  color: var(--color-light);
}

section > h2 {
  color: var(--color-primary);
  margin-bottom: 3rem;
}

.text-light {
  color: var(--color-light);
}

a {
  color: var(--color-primary);
  transition: var(--transition) ;
}

a:hover {
  color: var(--color-white);
}

.btn {
  width: max-content;
  display: block;
  color: var(--color-primary);
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid var(--color-primary);
  transition: var(--transition) ;
}

.btn:hover {
  background: var(--color-white);
  color: var(--color-bg);
  border-color: transparent;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-bg);
}

img {
  display: block;
  width: 100%;
  object-fit: cover;
}


/* =============MEDIA QUERY (Medium Devices)========== */
@media screen and (max-width: 1024px) {
  .container {
  width: var(--container-with-md);
  }

  section {
    margin-top: 6rem;
  }
}



/* =============MEDIA QUERY (Small Devices)========== */
@media screen and (max-width: 600px) {
  .container {
  width: var(--container-with-sm);
  }

  section > h2 {
    margin-bottom: 6rem;
  }
}


`;

export const StyleH2 = styled.h2``;

