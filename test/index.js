const parseAndReplaceString = (str, params) => {
  const reg = /{(\w*)}/g;
  let arr;
  let st = str;
  while ((arr = reg.exec(str)) !== null) {
    console.log(arr);
    if (params.hasOwnProperty(arr[1])) {
      st = st.replace(arr[0], params[arr[1]]);
    } else {
      throw new Error(`Not Found Params: ${arr[1]}`);
    }
  }
  console.log(str);
  console.log(st);
};

parseAndReplaceString("wo shi {name}. shi ge {gender}.", { name: "wangsw", gender: "wangsw" });
