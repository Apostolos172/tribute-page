import Point from "./Point.js";

let apiUrl =
  "https://tribute-page-6a60c-default-rtdb.europe-west1.firebasedatabase.app/points.json";

// console.log(apiUrl);

let points = [];
fetch(apiUrl)
  //fetch(apiUrl, { mode: "no-cors" })
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    // console.log(Object.keys(data));
    // console.log(Object.values(data));

    let concatenatedData = Object.keys(data);
    let values = Object.values(data);

    const place_for_points = document.getElementById("place-for-points");
    console.log(place_for_points);

    concatenatedData = concatenatedData.map((date, index) => {
      let tempPoint = new Point(date, values[index]);
      return tempPoint;
    });

    console.log(concatenatedData);

    // place_for_points.innerHTML = JSON.stringify(concatenatedData);

    // we have our data
    /*
    τα μονά elements θα γίνουν αριστερά, τα ζυγά δεξιά
    για κάθε ένα element του array δημιουργώ ένα element html που θα περιέχει τις πληροφορίες και 
    τελικά το θέτω ως παιδί του div
    */

    place_for_points.classList.add("timeline", "container");
    concatenatedData.forEach((point, index) => {
      const pointDiv = document.createElement("div");
      pointDiv.classList.add("row", "point");

      // if (index % 2 === 0) {
      //   pointDiv.classList.add("left");
      // } else {
      //   pointDiv.classList.add("right");
      // }
      index % 2 === 0
        ? pointDiv.classList.add("left")
        : pointDiv.classList.add("right");

      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty", "col-sm-6");

      if (pointDiv.classList.contains("right")) {
        pointDiv.appendChild(emptyDiv);
      }

      const contentDiv = document.createElement("div");
      contentDiv.classList.add("col-sm-6", "point");

      const heading = document.createElement("h3");
      let text = document.createTextNode(point.year);
      heading.appendChild(text);
      contentDiv.appendChild(heading);

      const p = document.createElement("p");
      text = document.createTextNode(point.event);
      p.appendChild(text);
      contentDiv.appendChild(p);

      pointDiv.appendChild(contentDiv);

      if (pointDiv.classList.contains("left")) {
        pointDiv.appendChild(emptyDiv);
      }

      place_for_points.appendChild(pointDiv);
    });
    // const p = document.createElement("p");
    // p.innerHTML = "lorem ipsum dolor sit";
    // place_for_points.appendChild(p);
  });

`            
<div class="row point left">
  <div class="col-sm-6 point">
    <h3>1942</h3>
    <p>
      Begins working on the Manhattan Project to develop the first
      atomic bomb
    </p>
  </div>

  <div class="col-sm-6 empty"></div>
</div>

<div class="row point right">
  <div class="col-sm-6 empty"></div>

  <div class="col-sm-6 point">
    <h3>1955</h3>
    <p>Dies in Princeton, New Jersey at the age of 76</p>
  </div>
</div>
`;
