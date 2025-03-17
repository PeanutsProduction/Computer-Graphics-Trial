
window.onload = function Initialization(){
    // Get WebGL context
    const canvas = document.getElementById("gl-canvas");
    const gl = canvas.getContext("webgl");

    // Show error and exit if no WebGL context found
    if(!gl){
        alert("Webgl not available");
        return;
    }

    Render();
}

function Render(){

}