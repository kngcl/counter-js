let data = 0;

function addition() {
  data = Math.max(data, Math.floor(Math.random() * 1000));
}
function subs() {
  data = Math.max(data, Math.floor(Math.random() * 1000));
}
function getCurrentValue() {
  return data;
}

export default
 { addition, subs, getCurrentValue };
