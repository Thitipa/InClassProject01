import barcode from "../images/image2.png";

function UnableLogin() {
  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "20px" }}
      >
        <img src={barcode} alt="Barcode" width="200px" />
      </div>
      <p
        style={{ fontSize: "30px" }}
        gutterBottom
        variant="h5"
        component="div"
        className=" d-flex justify-content-center"
      >
        Unable to Login?
      </p>
      <p
        className="d-flex justify-content-center"
        style={{ textAlign: "center" }}
      >
        Listen to some music, relax yourself, and take a deep breath until you
        can remember your password.
      </p>
    </div>
  );
}

export default UnableLogin;
