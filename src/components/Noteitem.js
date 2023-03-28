import React from "react";

function Noteitem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eaque alias ad iste blanditiis iusto odio quod eligendi debitis voluptatem illo est quibusdam natus nulla, recusandae doloremque. Asperiores, delectus accusamus.</p>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
