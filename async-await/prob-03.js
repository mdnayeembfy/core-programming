// Sequential async calls

async function step1() {
  return 'Step 1';
}

async function step2() {
  return 'Step 2';
}

async function runSteps() {
  const a = await step1();
  const b = await step2();
  return [a, b];
}

runSteps().then(console.log);