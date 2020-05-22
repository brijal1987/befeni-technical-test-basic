const getOutput = (instructions) => {
  if (instructions !== "" && instructions !== undefined) {
    const instructionsArray = instructions.split("\n");
    let output = "";
    let is_valid = 1;
    instructionsArray.map((instruction, i) => {
      const _instruction = instruction.trim().split(" ");
      if (_instruction.length === 2) {
        const setOfInstruction = _instruction[0].trim().toLowerCase();
        if (
          !["add", "multiply", "divide", "subtract", "apply"].includes(
            setOfInstruction
          )
        ) {
          is_valid = 0;
        }
        switch (setOfInstruction) {
          case "add":
            if (output == "") {
              output += "(";
            }
            if (isNaN(_instruction[1].trim())) {
              is_valid = 0;
            } else {
              output += _instruction[1].trim() + "+";
            }
            break;
          case "multiply":
            if (output == "") {
              output += "(";
            }
            if (isNaN(_instruction[1].trim())) {
              is_valid = 0;
            } else {
              output += _instruction[1].trim() + ") * (";
            }
            break;
          case "divide":
            if (output == "") {
              output += "(";
            }
            if (isNaN(_instruction[1].trim())) {
              is_valid = 0;
            } else {
              output += _instruction[1].trim() + ") / (";
            }
            break;
          case "subtract":
            if (output == "") {
              output += "(";
            }
            if (isNaN(_instruction[1].trim())) {
              is_valid = 0;
            } else {
              output += _instruction[1].trim() + ") - (";
            }
            break;

          case "apply":
            if (isNaN(_instruction[1].trim())) {
              is_valid = 0;
            } else {
              if (output != "") {
                output += _instruction[1].trim() + ")";
              } else {
                output += _instruction[1].trim();
              }
            }

            break;
        }
      } else {
        is_valid = 0;
      }
    });
    if (is_valid) {
      return eval(output);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
module.exports = getOutput;
