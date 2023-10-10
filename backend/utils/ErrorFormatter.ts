import pe from "pretty-error"

export const _printError = (error: any) => {
  const formatedError = new pe();
  const renderedError = formatedError.render(error);
  console.log(renderedError);
};


