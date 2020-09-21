function initArray(arrayLength) {
    let array = [];
    for ( let i=0; i < arrayLength; i++) {
        array.push(0);
    }
    return array;
    console.log(array);
}

function isBrainFuckInstruction(char) {
 let isBrainFuckInstr = '+-<>.,[]';
 return isBrainFuckInstr.includes(char);
}



function cleanProgram(program) {
    let cleanProg = program.split('');
    return cleanProg.filter(isBrainFuckInstruction);

}

function interpretBrainFuck ( program, inputArray, arrayLength) {
    let array = initArray(arrayLength);
    let result = '';
    let pointer = 0;
    let cleanProg = cleanProgram(program);
    let instrIndex = 0;

    console.log(array);
    // console.log(cleanProg);

    while ( instrIndex < cleanProg.length) {
        let instruction = cleanProg[instrIndex];

        switch(instruction) {
            case '+':
                array[pointer]++;
                instrIndex++;
                break;
            case '-':
                array[pointer]--;
                instrIndex++;
                break;
            case '<':
                pointer++;
                instrIndex++;
                break;
            case '>':
                pointer--;
                instrIndex++;
                break;
            case '.':
                result += String.fromCharCode(array[pointer]);
                instrIndex++;
                break;
            case ',':
                array[pointer] = inputArray.shift();
                instrIndex++;
                break;
            case '[':
                if ( array[pointer] === 0) {
                    
                }

                else {
                    
                }
                instrIndex++;
                break;
            case ']':

                instrIndex++;
                break;

            // default:
          }
    }

    return result;
}

