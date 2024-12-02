<<<<<<< HEAD
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
=======
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
>>>>>>> 69f645bf35cf3931db1c8c34b646f5cf3afdb989
};