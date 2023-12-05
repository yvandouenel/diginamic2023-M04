export default class Model {
  static universities = [];
  static loadUniversities(country, handleSubmit) {
    return fetch("http://universities.hipolabs.com/search?country=" + country)
      .then((response) => {
        return response.json();
      })
      .then(data => {
        console.log(`data : `, data);
        Model.universities = data;
        handleSubmit();
      })
  }

}