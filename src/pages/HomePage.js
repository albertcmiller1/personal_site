import React from "react";
 
// Function will execute on click of button 
const onButtonClick = () => { 
    // using Java Script method to get PDF file 
    fetch('https://raw.githubusercontent.com/albertcmiller1/personal_site/main/README.md').then(response => { 
        response.blob().then(blob => { 
            // Creating new object of PDF file 
            const fileURL = window.URL.createObjectURL(blob); 
            // Setting various property values 
            let alink = document.createElement('a'); 
            alink.href = fileURL; 
            alink.download = 'SamplePDF.pdf'; 
            alink.click(); 
        }) 
    }) 
} 


const HomePage = () => {
    return (
        <div>
            <h1>
                Home
            </h1>
            <div>
                My name is Albert Miller and i'm a Senior Associate Sotware Engineer at Capital One. 
                I was rasied in Norman, Oklahoma with a family primarily composed of bankers and sotware engineers, so it was fitting my career led me to financial software. 
                In college I studied Mechanical Engineering at the University of Texas at Austin, with a minor in business administration. 
                In my junior year, I took my first coding class in MATLAB. 
                I immidiatly fell in love with coding and knew this was what I wanted to do as a career. 
                Along the journy of college, I had a personal goal to follow a life long dream of becoming a pilot. 
                With a few extra classes and a bit of studying on the side, I fufilled this dream just after my 22nd birthday. 
                Afer college, I attended a six month software bootcamp focused on full stack web development offered by Capital One. 
                My career started with SRE development work on Capital One's largest databases. 
                I'm greatful to have learned about distrubuted cloud databases, AWS, Linux, Bash, and Python scriping in this initial role. 
                My second and current role is Data focused. I work on an end of day batch team critical to Capital One's in house financial core. 
                This has givin me the opportunity to learn about Python, Scala, Spark, event driven cloud architecture, and application performance optimizations on cloud servers. 
            </div>
            <center> 
                <h1>Welcome to Geeks for Geeks</h1> 
                <h3>Click on below button to download PDF file</h3> 
                <button onClick={onButtonClick}> 
                    Download PDF 
                </button> 
            </center> 
        </div>
    );
};
 
export default HomePage;