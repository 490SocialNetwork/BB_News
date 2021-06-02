async function authenticate(info) {
  try {
    const res = await fetch(`/api/user/${info}`);
    const fullData = await res.json();
    return await fullData;
  } catch (err) {
    console.log(err);
  }
}

export default authenticate;
