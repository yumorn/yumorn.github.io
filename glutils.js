function createProgram(vertexShaderSrc, fragmentShaderSrc) {
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSrc);
    gl.compileShader(vertexShader);

    var message = gl.getShaderInfoLog(vertexShader);
    if (message.length > 0) {
        throw "error in vertex shader. \n\n" + message;
    }

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSrc);
    gl.compileShader(fragmentShader);

    message = gl.getShaderInfoLog(fragmentShader);
    if (message.length > 0) {
        throw "error in fragment shader. \n\n" + message;
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        message = gl.getProgramInfoLog(program);
        throw 'Could not compile WebGL program. \n\n' + info;
    }
    
    return program;
}

function createProgramById(vertexShaderSrcId, fragmentShaderSrcId) {
    vertexShaderSrc = document.getElementById(vertexShaderSrcId).textContent;
    fragmentShaderSrc = document.getElementById(fragmentShaderSrcId).textContent;
    return createProgram(vertexShaderSrc, fragmentShaderSrc);
}