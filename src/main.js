const form = document.querySelector('.form-wrapper');
const url = 'https://fe-student-api.herokuapp.com/api/file';

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fetchOptions = {
    method: 'POST',
    enctype: 'multipart/form-data',
    body: new FormData(form),
  };
  try {
    const response = await fetch(url, fetchOptions);
    const result = await response.json();
    console.log(`File ${result.fileName} has been successfully uploaded.`);
  } catch (error) {
    console.log(error);
  }
});
