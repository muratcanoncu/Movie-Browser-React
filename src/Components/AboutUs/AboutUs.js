import ElonMusk from "./img/ElonMusk.jpg";
import BillGates from "./img/BillGates.jpg";
import JeffBezos from "./img/JeffBezos.jpg";
function AboutUs() {
  return (
    <div className="aboutUs">
      <h1>FETCHFLIX</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-3">
            <h2 style={{ borderBottom: "4px solid #e50914" }}>Our Team</h2>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className="teamPlayers">
              <p className="d-flex flex-column">
                <b>Co-Founder:</b> Murat Can Öncü
              </p>
            </div>
            <div className="teamPlayers">
              <p className="d-flex flex-column">
                <b>Investor:</b> Bill Gates
              </p>
              <img src={BillGates}></img>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 mx-auto">
            <div className="teamPlayers">
              <p className="d-flex flex-column">
                <b>Software Developer:</b> Elon Musk
              </p>
              <img src={ElonMusk}></img>
            </div>

            <div className="teamPlayers">
              <p className="d-flex flex-column">
                <b>Operation Manager:</b> Jeff Bezos
              </p>
              <img src={JeffBezos}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
