const Servercomponent = async (props) => {
  const search = await props.searchParams;
  const username = await search.name;

  if (!username) {
    return <h1>please provide user name </h1>;
  }

  const res = await fetch(`https://api.genderize.io/?name=${username}`);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1>Server component</h1>
      <p>
        The gender of a person is - {data.gender}, his name is {data.name} , The
        No of persons whose name can be himanshu is {data.count} , and the
        probability of the gender is {data.probability * 100 + "%"}
      </p>
    </>
  );
};

export default Servercomponent;
