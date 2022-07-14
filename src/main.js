const formElem = document.querySelector('.form-wrapper');
// const submitBtn = document.querySelector('.form-button');
const urlPost = 'https://fe-student-api.herokuapp.com/api/file';

formElem.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputedFile = document.querySelector('.form-input').files[0];

  console.log(inputedFile);
  const formData = new FormData();
  formData.append('file', inputedFile);

  console.log(formData);

  const fetchOptions = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  };
  const response = await fetch(urlPost, fetchOptions);
  if (!response.ok) throw new Error(`URL not found: error type: ${response.status}`);

  const result = await response.json();
  console.log(result.message);
});
