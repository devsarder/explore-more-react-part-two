// eslint-disable-next-line react/prop-types
export default function Friend({friend}) {
    console.log(friend);
    // eslint-disable-next-line react/prop-types
    const {name,email} = friend;
  return (
    <div className="box ">
      <h4>Friend Name: {name} </h4>
      <p>Friend Email: {email} </p>
    </div>
  );
}
