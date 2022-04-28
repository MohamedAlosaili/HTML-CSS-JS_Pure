const nums = document.querySelectorAll(".box .num");

nums.forEach((num) => {
  const numValue = +num.innerHTML;

  let start = 0;

  const interval = setInterval(() => {
    num.innerHTML = start += 111;

    if (start >= numValue - 111) {
      clearInterval(interval);
      num.innerHTML = numValue;
    }
  }, 10);
});
