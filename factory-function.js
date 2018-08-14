const dog = () => {
  const sound = "woof";
  return {
    talk: () => console.log(sound)
  }
};
const sniffles = dog();
sniffles.talk();

/* 
  when not to use factory ?
  when you need create a lot of object
  ------------------------------------
  Factory Benchmark: 0.0004 ms
  Class Benchmark: 0.0002 ms
*/